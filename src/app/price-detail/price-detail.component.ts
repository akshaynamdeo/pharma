import { Component, OnInit } from '@angular/core';
import { CellIconRendererComponent } from '../cell-icon-renderer/cell-icon-renderer.component';

@Component({
  selector: 'app-price-detail',
  templateUrl: './price-detail.component.html',
  styleUrls: ['./price-detail.component.scss']
})
export class PriceDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  showResults: any
  columnDefs = [
    {headerName: '', field: 'edit',cellRenderer : CellIconRendererComponent},
    {headerName: 'Make', field: 'make'},
    {headerName: 'Make', field: 'make'},
    {headerName: 'Model', field: 'model'},
    {headerName: 'Price', field: 'price'},
    {headerName: 'Price', field: 'price'},
    {headerName: 'Price', field: 'price'},
    {headerName: 'Price', field: 'price'},
    {headerName: 'Price', field: 'price'}
];

rowData = [
    {make: 'Toyota', model: 'Celica', price: 35000,id:1,edit:true,delete:true},
    {make: 'Ford', model: 'Mondeo', price: 32000,id:2,edit:true},
    {make: 'Porsche', model: 'Boxter', price: 72000,id:3,edit:true},
    {make: 'Toyota', model: 'Celica', price: 35000,id:4,edit:false,},
    {make: 'Ford', model: 'Mondeo', price: 32000,id:4,edit:true,delete:true},
    {make: 'Porsche', model: 'Boxter', price: 72000,id:4,edit:false},
    {make: 'Toyota', model: 'Celica', price: 35000,id:4,edit:true},
    {make: 'Ford', model: 'Mondeo', price: 32000,id:4,edit:false},
    {make: 'Porsche', model: 'Boxter', price: 72000,id:4,edit:true}
];

}
