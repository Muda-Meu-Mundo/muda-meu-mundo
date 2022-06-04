import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
})
export class EditarPage implements OnInit {

  

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

  salvar(){
    this.router.navigate(['tabs']);
  }

  voltar(){
    this.router.navigate(['tabs']);
  }


}
