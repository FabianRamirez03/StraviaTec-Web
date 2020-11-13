import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {

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
