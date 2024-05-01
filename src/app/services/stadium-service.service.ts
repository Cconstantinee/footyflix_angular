import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StadiumService {

  private readonly ROOT_URL:string='http://localhost/footyflix_php/functions/stadium_service.php'
  
  constructor(private http: HttpClient) { }

  getStadiumsFromAPI(): Observable<any[]> {
    return this.http.get<any[]>(this.ROOT_URL);
  }
}
