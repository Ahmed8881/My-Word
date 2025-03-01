import { Component, EventEmitter, Output } from '@angular/core';
import { DocumentService } from '../services/document.service';
import { ThemeService } from '../services/theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() themeToggled = new EventEmitter<void>();

  activeTab = "Home"
  isDarkMode = true
  fileName = "Document1"

  menuItems = [
    { id: "File", label: "File" },
    { id: "Home", label: "Home" },
    { id: "Insert", label: "Insert" },
    { id: "Layout", label: "Layout" },
    { id: "References", label: "References" },
    { id: "Review", label: "Review" },
    { id: "View", label: "View" },
    { id: "Help", label: "Help" },
  ]

  fileMenuOpen = false

  constructor(
    private documentService: DocumentService,
    private themeService: ThemeService,
  ) {
    this.themeService.isDarkMode$.subscribe((isDark) => {
      this.isDarkMode = isDark
    })
  }

  setActiveTab(tabId: string) {
    if (tabId === "File") {
      this.fileMenuOpen = !this.fileMenuOpen
      return
    }

    this.fileMenuOpen = false
    this.activeTab = tabId
  }

  toggleTheme() {
    this.themeToggled.emit()
  }

  saveDocument() {
    this.documentService.saveDocument()
    this.fileMenuOpen = false
  }

  downloadDocument() {
    this.documentService.downloadDocument()
    this.fileMenuOpen = false
  }

  newDocument() {
    this.documentService.newDocument()
    this.fileMenuOpen = false
  }
}
