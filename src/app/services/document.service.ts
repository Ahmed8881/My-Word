import { Injectable } from "@angular/core"
import { BehaviorSubject } from "rxjs"

@Injectable({
  providedIn: "root",
})
export class DocumentService {
  private editor: any
  private documentContentSubject = new BehaviorSubject<string>("<p>Welcome to your document. Start typing...</p>")

  documentContent$ = this.documentContentSubject.asObservable()

  constructor() {}

  setEditor(editor: any) {
    this.editor = editor
  }

  updateContent(content: string) {
    this.documentContentSubject.next(content)
  }

  applyFormatting(format: string, value?: any) {
    if (!this.editor) return

    const selection = this.editor.getSelection()
    if (!selection) return

    switch (format) {
      case "bold":
        this.editor.format("bold", !this.editor.getFormat().bold)
        break
      case "italic":
        this.editor.format("italic", !this.editor.getFormat().italic)
        break
      case "underline":
        this.editor.format("underline", !this.editor.getFormat().underline)
        break
      case "strikethrough":
        this.editor.format("strike", !this.editor.getFormat().strike)
        break
      case "subscript":
        this.editor.format("script", this.editor.getFormat().script === "sub" ? false : "sub")
        break
      case "superscript":
        this.editor.format("script", this.editor.getFormat().script === "super" ? false : "super")
        break
      case "color":
        this.editor.format("color", value)
        break
      case "background":
        this.editor.format("background", value)
        break
      case "align":
        this.editor.format("align", value)
        break
      case "indent":
        if (value === "increase") {
          this.editor.format("indent", "+1")
        } else {
          this.editor.format("indent", "-1")
        }
        break
      case "list":
        if (value === "bullet") {
          this.editor.format("list", "bullet")
        } else if (value === "ordered") {
          this.editor.format("list", "ordered")
        } else {
          this.editor.format("list", false)
        }
        break
      case "font":
        this.editor.format("font", value)
        break
      case "size":
        this.editor.format("size", value)
        break
    }
  }

  saveDocument() {
    // In a real app, this would save to a server
    console.log("Document saved:", this.documentContentSubject.value)
    alert("Document saved successfully!")
  }

  downloadDocument() {
    const content = this.documentContentSubject.value
    const blob = new Blob([content], { type: "text/html" })
    const url = URL.createObjectURL(blob)

    const a = document.createElement("a")
    a.href = url
    a.download = "document.html"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  newDocument() {
    if (confirm("Are you sure you want to create a new document? Any unsaved changes will be lost.")) {
      this.documentContentSubject.next("<p>Welcome to your document. Start typing...</p>")
    }
  }
}

