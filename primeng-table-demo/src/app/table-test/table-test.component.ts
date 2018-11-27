import { Component, OnInit } from '@angular/core';


export interface Car {
  make: string;
  model: string;
  owned: boolean;
}
@Component({
  selector: 'app-table-test',
  templateUrl: './table-test.component.html',
  styleUrls: ['./table-test.component.css']
})
export class TableTestComponent implements OnInit {

  cars : Car[] =[
    {make:"Fiat",model:"Uno",owned: true},
    {make:"Corvette",model:"Stingray",owned: false},
  ];

  constructor() { }

  ngOnInit() {
  }
  save() {
    console.log(this.cars);
  }

}
