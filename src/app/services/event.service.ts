import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private url: string = 'https://app.ticketmaster.com/discovery/v2/events.json?city=toronto&countryCode=CA&apikey=mqG7pP3oVIQVWIrA4ZsS0DgbrAstA4Bv&keyword=summer';

  private url2: string = 'https://app.ticketmaster.com/discovery/v2/events.json?city=toronto&countryCode=CA&apikey=mqG7pP3oVIQVWIrA4ZsS0DgbrAstA4Bv';
  
  constructor(private http: HttpClient) {}

  getEvents(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  getFilteredEvents(searchString: string): Observable<any> {
    return this.http.get<any>(this.url2 + `&keyword=${searchString}`)
  }
}
