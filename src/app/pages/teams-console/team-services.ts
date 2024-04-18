import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamServices {

  private readonly ROOT_URL = 'http://localhost/footyflix_php/functions/get_teams.php';

  constructor(private http: HttpClient) { }

  getTeamsFromAPI(captainID: number): Observable<any[]> { 

    let params = new HttpParams().set('captainID', captainID.toString());
    return this.http.get<any[]>(this.ROOT_URL, { params });
  }
}
