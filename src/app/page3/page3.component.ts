import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {

  constructor(public dataService:DataService) { }

  ngOnInit(): void {
    console.log('ng onInit called for page3');
  }

  deleteLastBook(){
    this.dataService.deleteBook();
  }

}
