import { Component, OnInit } from '@angular/core';
import { ProductoServicesService } from '../producto-services.service';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor(private productoService : ProductoServicesService ) { }

  listProductos : any;

  ngOnInit(): void {

    this.productoService.consultarProductos().subscribe( (data) => {
      this.listProductos = data;
    });
  }

  

}
