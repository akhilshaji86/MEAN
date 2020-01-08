import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  submitt(postTitle: string) {
    this.http.get('http://localhost:3000/',{headers:new HttpHeaders().set('Content-Type', 'application/json')}).subscribe(res=>{
      console.log(postTitle,res);
    });
  }
}
