import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductEntryServiceService {

  constructor(private http:HttpClient) { }

  public doEntry(product:any){
   console.log(product)
   const headers = new HttpHeaders();
   headers.append('Content-Type', 'application/json');
   return this.http.post("http://localhost:9191/addProduct",product,{
    headers: headers,responseType :'text' as 'json'});
  }
}
