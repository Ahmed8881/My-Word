import { Component , Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() label = ""
  @Input() icon = ""
  @Input() variant: "primary" | "secondary" | "text" = "secondary"
  @Input() size: "small" | "medium" | "large" = "medium"
  @Input() disabled = false

  @Output() clicked = new EventEmitter<void>()

  onClick() {
    if (!this.disabled) {
      this.clicked.emit()
    }
  }
}
