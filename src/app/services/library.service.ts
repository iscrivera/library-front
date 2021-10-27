import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  URL_BASE = 'http://localhost:3000/api'
  URL_BOOKS = '/books'
  URL_USERS = '/users'
  URL_LOANS = '/loans'

  constructor(private http: HttpClient) { }

  postLogin(user: any) {
    return this.http.post<any>(`${this.URL_BASE}${this.URL_USERS}/login`, user);
  }

  postCreateUser(user: any) {
    return this.http.post<any>(`${this.URL_BASE}${this.URL_USERS}`, user);
  }

  getBooks(){
    return this.http.get<any>(`${this.URL_BASE}${this.URL_BOOKS}`);
  }

  getBook(id : any){
    return this.http.get<any>(`${this.URL_BASE}${this.URL_BOOKS}/${id.idBook}`);
  }

  postLoan(loan:any){
    return this.http.post<any>(`${this.URL_BASE}${this.URL_LOANS}`, loan);
  }


}

