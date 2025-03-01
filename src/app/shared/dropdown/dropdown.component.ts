import { Component,Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})
export class DropdownComponent {
  @Input() items: any[] = []
  @Input() selectedItem: any
  @Input() displayProperty = ""
  @Input() width = "100px"

  @Output() itemSelected = new EventEmitter<any>()

  isOpen = false

  toggleDropdown() {
    this.isOpen = !this.isOpen
  }

  selectItem(item: any) {
    this.selectedItem = item
    this.itemSelected.emit(item)
    this.isOpen = false
  }

  getDisplayValue() {
    if (!this.selectedItem) return ""
    return this.displayProperty ? this.selectedItem[this.displayProperty] : this.selectedItem
  }
}
