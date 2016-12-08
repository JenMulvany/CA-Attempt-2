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

}
