import { Component,OnInit } from '@angular/core';
import { DocumentService } from '../services/document.service';

@Component({
  selector: 'app-statusbar',
  standalone: true,
  imports: [],
  templateUrl: './statusbar.component.html',
  styleUrl: './statusbar.component.scss'
})
export class StatusbarComponent implements OnInit {
  wordCount = 0
  pageCount = 1
  currentPage = 1
  zoomLevel = 100

  constructor(private documentService: DocumentService) {}

  ngOnInit() {
    // this.documentService.documentStats$.subscribe((stats) => {
    //   this.wordCount = stats.wordCount
    //   this.pageCount = stats.pageCount
    // })
  }

  changeZoom(delta: number) {
    this.zoomLevel = Math.max(10, Math.min(200, this.zoomLevel + delta))
    // this.documentService.setZoom(this.zoomLevel)
  }

}
