import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  pageRequested = 1;
  //to send event we need event emitter
  // to bind an event we use @Output
  @Output() //@Output indicates that data is sending out
  pageChangeEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onPageChange(page: number){
    this.pageRequested = page;
    console.log(this.pageRequested);
    this.pageChangeEvent.emit(page);
  }


}
