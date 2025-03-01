import { Component } from "@angular/core"
import { DocumentService } from "../services/document.service"
import { CommonModule } from "@angular/common"
@Component({
  selector: "app-ribbon",
  templateUrl: "./ribbon.component.html",
  standalone: true,
  imports: [CommonModule],
  styleUrls: ["./ribbon.component.scss"],
})
export class RibbonComponent {
  fonts = ["Arial", "Calibri", "Times New Roman", "Verdana", "Georgia", "Tahoma"]

  fontSizes = ["8", "9", "10", "11", "12", "14", "16", "18", "20", "22", "24", "26", "28", "36", "48", "72"]

  selectedFont = "Calibri"
  selectedFontSize = "11"

  constructor(private documentService: DocumentService) {}

  applyBold() {
    this.documentService.applyFormatting("bold")
  }

  applyItalic() {
    this.documentService.applyFormatting("italic")
  }

  applyUnderline() {
    this.documentService.applyFormatting("underline")
  }

  applyStrikethrough() {
    this.documentService.applyFormatting("strikethrough")
  }

  applySubscript() {
    this.documentService.applyFormatting("subscript")
  }

  applySuperscript() {
    this.documentService.applyFormatting("superscript")
  }

  applyTextColor(color: string) {
    this.documentService.applyFormatting("color", color)
  }

  applyHighlight(color: string) {
    this.documentService.applyFormatting("background", color)
  }

  applyAlignment(alignment: string) {
    this.documentService.applyFormatting("align", alignment)
  }

  applyIndent(type: string) {
    this.documentService.applyFormatting("indent", type)
  }

  applyList(type: string) {
    this.documentService.applyFormatting("list", type)
  }

  changeFont(font: string) {
    this.selectedFont = font
    this.documentService.applyFormatting("font", font)
  }

  changeFontSize(size: string) {
    this.selectedFontSize = size
    this.documentService.applyFormatting("size", size)
  }
}

