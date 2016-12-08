import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-part-a',
  templateUrl: './part-a.component.html',
  styleUrls: ['./part-a.component.css']
})
export class PartAComponent implements OnInit{

  constructor(private router: Router) { }

  navigate() {
        this.router.navigate(["home"]),
        this.router.navigate(["part-b"]);
    }


  Celcius : number = 0;
  Fahrenhet : number = 0;


  CelciusToFahrenhet() {
    this.Fahrenhet = this.Celcius * 9/5 + 32;
  }

  fahrenthetToCelcius() {
    this.Celcius= this.Fahrenhet - 32 * 5/9
  }

  ngOnInit() {
  }
}