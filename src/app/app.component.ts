import { Component, importProvidersFrom, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DocumentService } from './services/document.service';
import { ThemeService } from './services/theme.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./header/header.component";
import { RibbonComponent } from "./ribbon/ribbon.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { EditorComponent } from "./editor/editor.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, RibbonComponent, SidebarComponent, EditorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  isDarkMode = true

  constructor(
    private documentService: DocumentService,
    private themeService: ThemeService,
  ) {}

  ngOnInit() {
    this.themeService.isDarkMode$.subscribe((isDark) => {
      this.isDarkMode = isDark
    })
  }

  toggleTheme() {
    this.themeService.toggleTheme()
  }
}

