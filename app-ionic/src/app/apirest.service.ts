import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
// import { resolve } from 'dns';
// import { rejects } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class ApirestService {
  private urlAPi = "http://127.0.0.1:8000/api"
  constructor(private http: HttpClient,public route: Router) { }
  public getUsers(){
    return this.http.get(this.urlAPi+'/mostrarEstudiante')
  }
  public Login(email:string,password:string):Observable<any>{
    return this.http.post(this.urlAPi+'/login',{email,password});
  }
  public Registro(name:string,email:string,password:string):Observable<any>{
    return this.http.post(this.urlAPi+'/registro',{name,email,password});
  }
}
