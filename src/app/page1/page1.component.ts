import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  pageName = 'Page 1 from typescript';
  constructor() { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.pageName = 'First Page';
    },5000)
  }

  onButtonClick(){
    alert('button is clicked and today\'s date is '+new Date() );
  }
}
