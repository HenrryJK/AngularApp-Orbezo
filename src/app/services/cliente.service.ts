import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private url='http://localhost:9001/usuarios';
  constructor(private http:HttpClient) { }
  getListarUsuarios(){
    return this.http.get<Cliente[]>(this.url+'/all');
 
}
