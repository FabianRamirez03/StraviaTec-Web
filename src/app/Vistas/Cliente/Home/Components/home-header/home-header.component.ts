import { Component, OnInit } from '@angular/core';
import { ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss']
})
export class HomeHeaderComponent implements OnInit {

  constructor(public el: ElementRef, public renderer: Renderer2) {
    renderer.listen('document', 'scroll', (event) => {
      if
      (document.scrollingElement.scrollTop > 86) {
        const banner = document.getElementById('banner');
        banner.classList.add('shrink');
      } else {
        const banner = document.getElementById('banner');
        banner.classList.remove('shrink');
      }
    });
  }

  ngOnInit(): void {
  }

}
