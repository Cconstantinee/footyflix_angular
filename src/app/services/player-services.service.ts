import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  private readonly ROOT_URL:string='http://localhost/footyflix_php/functions/players_service.php';


  constructor(private http:HttpClient) { }

  getPlayersFromAPI(): Observable<any[]>{
    let params = new HttpParams();
    return this.http.get<any[]>(this.ROOT_URL);
  }
}
