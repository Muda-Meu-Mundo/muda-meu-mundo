import { Component } from '@angular/core';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}
  
  botaoclick(){
    alert('squeça tud')
  }

  facebook(){
    window.open('https://pt-br.facebook.com/mudameumundo/', '_system');
  }

  instagram(){
    window.open('https://www.instagram.com/mudameumundo/?hl=pt-br', '_system');
  }

  linkedin(){
    window.open('https://www.linkedin.com/company/muda-meu-mundo/?originalSubdomain=br', '_system');
  }

  site(){
    window.open('https://www.mudameumundo.com.br/', '_system');
  }





}