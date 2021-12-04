import {Component, OnInit, ViewChild} from '@angular/core';
import {FooterComponent} from "./footer/footer.component";
import {Page2Component} from "./page2/page2.component";
import {SubjectArea} from "../model/Book";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'SimpleAngularAppV1';

  @ViewChild('footer', {static: true})
  footerComponent!: FooterComponent

  @ViewChild('page2', {static: true})
  page2Component!: Page2Component

  startTime!: string;


  pageNumber:number=1 ;

  constructor() {
   // console.log('Subject Area1',SubjectArea.ART);
  }

  updateLastAccessed(){
   this.footerComponent.lastAccessed = new Date().toString();
  }

  ngOnInit(): void {
    this.startTime = new Date().toString();
  }

  incrementHitCounter(page:number) {
    this.pageNumber = page;
    if (page === 2) {

    this.page2Component.incrementHitCounter();
  }
  }
}
