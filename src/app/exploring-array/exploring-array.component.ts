import { Component, OnInit } from '@angular/core';
import {Book, SubjectArea, SubjectAreaWithCustomValue} from "../../model/Book";

@Component({
  selector: 'app-exploring-array',
  templateUrl: './exploring-array.component.html',
  styleUrls: ['./exploring-array.component.css']
})
export class ExploringArrayComponent implements OnInit {
  title='Exploring TypeScript';

  constructor() {

    for (const subject in SubjectAreaWithCustomValue){
      console.log('Label ',subject);
      // @ts-ignore
      console.log('Value ',SubjectAreaWithCustomValue[subject]);
    }

  }

  ngOnInit(): void {
  }

  exploringArrays(){
    const myArray1 =new Array<number>(5);
    const myArray2 :number[]=[1,2,3];
    console.log(myArray1);
    console.log(myArray2 );

    let num =4;
    if(num < 5){
      console.log('the number is less than 5');
    }else{
      console.log('the number is 5 or greater');
    }
  }

  exploreLambdaFunction(){
    const listOfNumbers = [1,2,3,4,5,6,7,8,9,10,11];
    const oddNumbers = listOfNumbers.filter(
      num=>{
        return num%2===1;
      }
    );
    console.log('Odd numbers '+oddNumbers);

  }

  isOdd(num:number):boolean{
    return num%2===1;
  }
}
