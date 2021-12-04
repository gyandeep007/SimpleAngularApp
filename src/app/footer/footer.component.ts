import {Component, Input, OnInit} from '@angular/core';
import {DataService} from "../data.service";
import {Book} from "../../model/Book";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input()// to bind the property of a child we use the @Input decorator
    //@Input tells us that the value of last accessed will be set by outside
  lastAccessed = "";

  constructor(public dataService:DataService) { }

  ngOnInit(): void {
  }

  addBook() {
    const book = new Book();
    book.title = 'another book';
    book.author = 'matt';
    book.price = 5.55;
    this.dataService.addBook(book);
  }

  addBook2() {
    const book = new Book();
    book.title = 'another book';
    book.author = 'james';
    book.price = 5.55;
    this.dataService.addBook(book);
  }
}
