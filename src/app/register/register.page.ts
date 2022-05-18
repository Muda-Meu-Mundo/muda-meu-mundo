import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  
  productList = [
    {"product" :"Frutas"},
    {"product" :"Grãos"},
    {"product" :"Legumes"}, 
    {"product" :"Raízes"},
    {"product" :"Verduras" }
  ]


  constructor(private router: Router) { }

  ngOnInit() {
    
  }

  register(){
    this.router.navigate(['login']);
  }

}
