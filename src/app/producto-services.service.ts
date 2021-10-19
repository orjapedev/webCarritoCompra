import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoServicesService {

  constructor(private http: HttpClient) { }

  urlApi = "https://localhost:44380/productos";

  consultarProductos() {

      return this.http.post(this.urlApi, {
        "transaccion": "generico",
        "tipo": "4"
       }
       );

  }
}
