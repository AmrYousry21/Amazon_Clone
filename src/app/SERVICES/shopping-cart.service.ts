import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  shopping_cart_items: any [] = [];

  constructor() { }
  addProduct = (product : object) => {
    let items = this.get_shooping_cart_items();
    if (items){
      items.push(product)
      localStorage.setItem('shopping_cart', JSON.stringify(items))
    }
    else{
      this.shopping_cart_items.push(product)
      localStorage.setItem('shopping_cart', JSON.stringify(this.shopping_cart_items))
    }

    //localStorage.setItem('shopping_cart', JSON.stringify(product))
  }

  get_shooping_cart_items = () =>{
    let items = localStorage.getItem('shopping_cart')
    return JSON.parse(items!)
  }
}
