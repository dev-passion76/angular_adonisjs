import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    withCredentials: true,
  };

  usersList:any[] = [];

  constructor(private http: HttpClient) {}

  login(myform:FormGroup) {
      const url = 'http://localhost:3333/login';

    return this.http.post(url, myform.value, this.httpOptions);

  }

  logout():Observable<any> {
    const url = 'http://localhost:3333/logout';
    return this.http.post(url, this.httpOptions);
  }

  users():Observable<any> {
    const url = 'http://localhost:3333/users';

    return this.http.get(url, this.httpOptions);
  }

}
