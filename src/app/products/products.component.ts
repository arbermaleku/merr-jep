import { Component, OnInit } from '@angular/core';
import { IProduct } from '../iproduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  _filterBy: string;
  get filterBy(): string {
    return this._filterBy;
  };
  set filterBy(value: string) {
    this._filterBy = value;
  }
  myProducts: IProduct[] = [
    {
      'pId': 1,
      'pTitle': 'My First Product',
      'pDescription': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quasi maiores fugit. ',
      'pUrl': 'http://demo.ajax-cart.com/photos/product/4/176/4.jpg'
    },
    {
      'pId': 2,
      'pTitle': 'My Second Product',
      'pDescription': `Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quasi maiores fugit.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quasi maiores fugit.`,
      'pUrl': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRiPnrx16_Yy47EddMsCLLN9-oKv9-b4-l7hqEAUyfOvQbJmvypA'
    },
    {
      'pId': 3,
      'pTitle': 'My Third Product',
      'pDescription': `Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quasi maiores fugit.
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Impedit quasi maiores fugit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quasi maiores fugit.`,
      'pUrl': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFjYBCIe_AfnDCaoVeXl2XsLrzXkNaMsonOev_W6UWnz2ICOHC'
    },
    {
      'pId': 4,
      'pTitle': 'My Forth Product',
      'pDescription': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quasi maiores fugit. ',
      'pUrl': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM_3pxA3BHR7U4rI1liutVR2O3OCHa7ZT73-6pcxXx5iGiHZ-T'
    },
    {
      'pId': 5,
      'pTitle': 'My Fifth Product',
      'pDescription': `Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quasi maiores fugit.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quasi maiores fugit.`,
      'pUrl': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNT2mx2fCUZr3e27faXh0iNVUsADKe3ACr3pY-zwpjjnrsjNcD'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
