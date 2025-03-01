import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  sidebarItems = [
    { icon: "search", label: "Find", active: false },
    { icon: "sync", label: "Replace", active: false },
    { icon: "object-group", label: "Select", active: false },
  ]

  activateItem(index: number) {
    this.sidebarItems.forEach((item, i) => {
      item.active = i === index
    })
  }
}
