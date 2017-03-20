import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import { MASHAPE_API_KEY, MASHAPE_API_URL } from "./api/api-details";
import { Observable } from "rxjs/Observable";

@Injectable()
export class QuoteService {

  constructor(private _http: Http) { }

  createMashapeHeader(headers: Headers) {
    headers.append("X-Mashape-Authorization", MASHAPE_API_KEY);
  }

  requestQuote(category: string): Observable<Response> {
    let headers = new Headers();
    this.createMashapeHeader(headers);
    return this._http.get(MASHAPE_API_URL + "?cat=" + category, {
      headers: headers
    });
  }

}
