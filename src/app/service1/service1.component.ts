import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-service1',
  imports: [],
  template: `
    <p>
      service1 works!
    </p>
  `,
  styles: ``
})
export class Service1Component {
  private jsonUrl = 'assets/railwayInfo.json';

  constructor(private http: HttpClient) {}

  getSearchData(): Observable<any> {
    return this.http.get<any>(this.jsonUrl);
  }
}
