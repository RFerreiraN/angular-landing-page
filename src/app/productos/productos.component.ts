import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/Models/producto.model';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})


export class ProductosComponent implements OnInit{
  

  url : string = 'https://fakestoreapi.com/products'
  arrayProductos : Producto[] = []

  constructor(){}

  
ngOnInit(): void {
  this.fetchProducts()
}

async fetchProducts()  {
    try {
      const res = await fetch(this.url);
      const data = await res.json()
      this.arrayProductos = data
      console.log(this.arrayProductos)
    } catch (error) {
        console.error('Ha ocurrido el siguiente error: ', error)
    }
}

}