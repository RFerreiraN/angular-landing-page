import { Component , OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit{
    nombreProducto : string = '';
    colorProducto: string = '';

    constructor(
      private _router : ActivatedRoute
    ){}
     
    ngOnInit(): void {
      this._router.params.subscribe( params => {
        this.nombreProducto = params['productoId']
        this.colorProducto = params['categoria']
      })
    }
}
