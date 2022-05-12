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
    alert('link facebook')
  }

  instagram(){
    alert('link instagram')
  }

  linkedin(){
    alert('link linkedin')
  }

  whatsapp(){
    alert('link zap') 
  }

  email(){
    alert('link email') 
  }




}