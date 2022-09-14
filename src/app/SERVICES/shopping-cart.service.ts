import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  shopping_cart_items: any [] = [];

  constructor() { }
  addProduct = (product: any) => {
    let items = this.get_shooping_cart_items();
    if (items){
      items.push(product)
      localStorage.setItem('shopping_cart', JSON.stringify(items))
    }
    else{
      this.shopping_cart_items.push(product)
      localStorage.setItem('shopping_cart', JSON.stringify(this.shopping_cart_items))
    }
  }

  get_shooping_cart_items = () =>{
    let items : any = localStorage.getItem('shopping_cart')
    return JSON.parse(items)
  }

  getCartLength = () =>{
    let products = this.get_shooping_cart_items();
    return products? this.get_shooping_cart_items().length: 0;
  }
}
