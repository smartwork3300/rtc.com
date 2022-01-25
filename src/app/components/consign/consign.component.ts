import { Component, OnInit } from '@angular/core';

interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-consign',
  templateUrl: './consign.component.html',
  styleUrls: ['./consign.component.css']
})
export class ConsignComponent implements OnInit {


  cities:City[];
  constructor() {

    this.cities = [
      {name: 'Sircilla', code: 'RM'},
      {name: 'Secunderabad', code: 'NY'},
      {name:'Karimnagar' ,code:'KNR'}
      
  ];
   }

  ngOnInit(): void {
  }

}
