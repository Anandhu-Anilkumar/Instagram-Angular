import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "./config";


@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private apiUrl = 'https://newsapi.org/v2/everything';
  private apiKey = environment.apiKey;

  constructor(private http: HttpClient) { }

  getLatestPosts(): Observable<any> {
    // const url = `${this.apiUrl}?q=instagram&sortBy=publishedAt&apiKey=${this.apiKey}`;
    const url = `../assets/static-data.json`;
    return this.http.get<any>(url);
  }
}
