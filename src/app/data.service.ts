import { Injectable,EventEmitter } from '@angular/core';
import {Book} from "../model/Book";


@Injectable({
  providedIn: 'root'
})
export class DataService {

  books:Array<Book>


  bookAddEvent = new EventEmitter<Book>();




  bookDeleteEvent = new EventEmitter<Book>()

  constructor() {
    this.books = new Array<Book>();
    const book1 = new Book();
    book1.title = 'first book';
    book1.author = 'matt';
    book1.price = 3.99;

    const book2 = new Book();
    book2.title = 'second book';
    book2.author = 'james';
    book2.price = 5.99;

    const book3 = new Book();
    book3.title = 'third book';
    book3.author = 'laura';
    book3.price = 8.99;


    this.books.push(book1);
    this.books.push(book2);
    this.books.push(book3);
  }

  addBook(book: Book){
    if(book.author === 'james'){
      console.log(`error notification because a new book with author ${book.author} has been added`);

      this.bookAddEvent.error('books by james now allowed');
    }else {
      this.books.push(book);
      console.log(`sending notification because a new book with author ${book.author} has been added`);
      this.bookAddEvent.emit(book);


    }
  }

  deleteBook(){
   const deletedBook = this.books.pop();
    this.bookDeleteEvent.emit(deletedBook);
  }
}
