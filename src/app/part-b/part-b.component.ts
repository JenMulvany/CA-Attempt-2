import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-part-b',
  templateUrl: './part-b.component.html',
  styleUrls: ['./part-b.component.css']
})
export class PartBComponent{

  constructor(private router: Router) { }

  navigate() {

      this.router.navigate(["home"]),
      this.router.navigate(["part-a"]);        
    }

    stone : number = 0;
    pounds : number = 0;
    orKgs : number = 0;
    feet : number = 0;
    inches : number = 0;
    orMeteres : number =0;
StoneToKgs() {
    this.orKgs = this.stone * 6.35029318 ;
  }
StoneAndPoundToKgs(){
  this.orKgs= this.stone * 6.35029318 + this.pounds * 0.45359237;
}
orKgsToStoneAndPound() {
  this.stone = this.orKgs *  2.2046226218/14;
  this.pounds = this.orKgs * 0.45359237/2.2046226218;
  


  
}


}
