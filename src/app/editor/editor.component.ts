import { Component, ViewEncapsulation } from '@angular/core';
import { DocumentService } from '../services/document.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './editor.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrl: './editor.component.scss'
})
export class EditorComponent {
  editorContent = ""

  quillConfig = {
    toolbar: false,
    theme: "snow",
    placeholder: "Start typing...",
    modules: {
      history: {
        delay: 2000,
        maxStack: 500,
        userOnly: true,
      },
    },
  }

  constructor(private documentService: DocumentService) {}

  ngOnInit() {
    this.documentService.documentContent$.subscribe((content) => {
      this.editorContent = content
    })
  }

  onEditorCreated(editor: any) {
    this.documentService.setEditor(editor)
  }

  onContentChanged(event: any) {
    this.documentService.updateContent(event.html)
  }
}
