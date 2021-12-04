import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataService} from "../data.service";
import {Book} from "../../model/Book";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit,OnDestroy {

  pageName = 'Page 1 from typescript';



  books:Array<Book>;


  bookWrittenByMe:number;



  subscription:Subscription;



  constructor(public _dataService:DataService) { }



  ngOnInit(): void {
    console.log('ng onInit called for page1');
    setTimeout(()=>{
      this.pageName = 'First Page';
    },5000)

    this.books = this._dataService.books;



    this.bookWrittenByMe = this.books.filter(it=>it.author==='matt').length;

   this.subscription = this._dataService.bookAddEvent.subscribe(
      (newBook)=>{
        // do something
        console.log(`receiving notification because a new book with author ${newBook.author} has been added`);

        if(newBook.author === 'matt'){
          this.bookWrittenByMe++;
        }
      },
      (error)=>{
        //do something
        console.log(`error notification because a new book with author ${error.author} has been added`);
        console.log('an error occurred',error);
      },
      ()=>{

      }
    );

   this._dataService.bookDeleteEvent.subscribe(
     (deletedBook)=>{
       if(deletedBook.author === 'matt'){
         this.bookWrittenByMe--;
       }
     },
     (error)=>{
       // do something
     }
   );
  }

  ngOnDestroy(): void {
    setTimeout(()=>{
      this.pageName
    },1000)


    this.subscription.unsubscribe();
  }


  onButtonClick(){
    alert('button is clicked and today\'s date is '+new Date() );
  }
}
