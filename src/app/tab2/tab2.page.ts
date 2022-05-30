import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private router: Router) {}

  frutas(){
    this.router.navigate(['frutas']);
  }
  verduras(){
    this.router.navigate(['verduras']);
  }
  legumes(){
    this.router.navigate(['legumes']);
  }
  graos(){
    this.router.navigate(['graos']);
  }
  raizes(){
    this.router.navigate(['raizes']);
  }
}
