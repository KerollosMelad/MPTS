import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-section',
  templateUrl: './services-section.component.html',
  styleUrls: ['./services-section.component.scss']
})
export class ServicesSectionComponent implements OnInit {
  selectedImage = '';
  selectedImageSrc = '';
  constructor() { }

  ngOnInit(): void {
  }

  onImageClick(imgSrc, imgName) {
    this.selectedImage = imgName;
    this.selectedImageSrc = imgSrc;

  }
}
