import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private API_BASE_URL: string = 'http://localhost:8081';
  constructor(private http: HttpClient) { }

  post(uri: string, payload: any) {
    return this.http.post(this.API_BASE_URL + uri, payload);
  }
  put(uri: string, payload: any) {
    return this.http.put(this.API_BASE_URL + uri, payload);
  }
  get(uri: string) {
    return this.http.get(this.API_BASE_URL + uri);
  }
  delete(uri: string) {
    return this.http.delete(this.API_BASE_URL + uri);
  }
  baseUrl() {
    return this.API_BASE_URL;
  }


  getHeader() {
    const token = sessionStorage.getItem('SESSION_TOKEN');
    const headers = new HttpHeaders({
      'Authorization': token || '',
    });
    return ({ headers: headers });
  }
}
