import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit{
   
    constructor(
      private _router : Router
    ){}
     
    ngOnInit(): void {
      this._router.navigate
    }
}
