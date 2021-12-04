import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  hits:number=0;


  constructor() { }

  ngOnInit(): void {
    console.log('ng onInit called for page1');
  }

  incrementHitCounter(){
    this.hits++;
  }

}
