import { Component, OnInit, ViewChild } from '@angular/core';
import { IonDatetime } from '@ionic/angular';
import { format, parseISO, getDate, getMonth, getYear } from 'date-fns';

import { Router } from '@angular/router';
@Component({
  selector: 'app-graos',
  templateUrl: './graos.page.html',
  styleUrls: ['./graos.page.scss'],
})
export class GraosPage implements OnInit {
  productList = [
    {"productName" : "Amendoim"},
    {"productName" : "Arroz"},
    {"productName" : "Aveia"},
    {"productName" : "Feijão"},
    {"productName" : "Milho"},
    {"productName" : "Lentilha"},
    {"productName" : "Soja"},  
    {"productName" : "Trigo"},
    
    ];
   
    unitList = [
      {"unitName" : "quilos"},
      {"unitName" : "toneladas"},
      {"unitName" : "arrobas"},
      {"unitName" : "sacas"},
      {"unitName" : "litros"},
     ];
     
    @ViewChild(IonDatetime, { static: true }) datetime: IonDatetime;
    dateValue = '';
    dateValue2 = '';
  constructor(private router: Router) { }
 
  formatDate(value: string) {
    return format(parseISO(value), 'MMM dd yyyy');
  }

  isDateEnabled(dateIsoString: string) {
    const date = new Date(dateIsoString);
    if (getDate(date) === 1 && getMonth(date) === 0 && getYear(date) === 2022) {
      // Disables January 1, 2022.
      return false;
    }
    return true;
  }

  ngOnInit() {
  }
  
  confirm(){
    this.router.navigate(['tabs/tab2']);
  }

}
