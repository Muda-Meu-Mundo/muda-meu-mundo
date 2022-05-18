import { Component, OnInit, ViewChild } from '@angular/core';
import { IonDatetime } from '@ionic/angular';
import { format, parseISO, getDate, getMonth, getYear } from 'date-fns';
@Component({
  selector: 'app-raizes',
  templateUrl: './raizes.page.html',
  styleUrls: ['./raizes.page.scss'],
})
export class RaizesPage implements OnInit {
  productList = [
   
    {"productName" : "Batata"},
    {"productName" : "Batata-doce"},
    {"productName" : "Beterraba"},
    {"productName" : "Cenoura"},
    {"productName" : "Gengibre"},
    {"productName" : "Inhame"},
    {"productName" : "Mandioca"},
    {"productName" : "Rabanete"},
       
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
  constructor() { }

  
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

}
