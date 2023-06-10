import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {
  fadeIn = false;
  constructor() { }

  ngOnInit(): void {
    window.addEventListener("scroll", function () {
      var element = document.querySelector('.fade-in-image');
      var elementPosition = element.getBoundingClientRect().top;
      var windowHeight = window.innerHeight;

      if (elementPosition < windowHeight) {
        element.classList.add('fade-in');
      }
    });

  }

}
