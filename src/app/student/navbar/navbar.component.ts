import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {StudentNavigationService} from '../student-navigation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  /*
    images = ['wind.png', 'charcoal.jpg', 'win10.jpg'];
    navItem = [{item: 'Home', icn: '', act: true}, {item: 'About Us', icn: '', act: false},
      {item: 'Product', icn: '', act: false}, {item: 'Contact', icn: '', act: false},
      {item: '', icn: 'shopping-cart', act: false}];
    public  activeNav = true;
    constructor() { }

    ngOnInit() {
    }*/


  @ViewChild('sidenav') sidenav: ElementRef;

  clicked: boolean;

  constructor(private nav: StudentNavigationService) {
    this.clicked = this.clicked === undefined ? false : true;
  }

  ngOnInit() {
  }

  setSelectedPage(val: string) {
    this.nav.selectedPage = val;
  }

  setClicked(val: boolean): void {
    this.clicked = val;
  }
}
