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
  sendNewUserToAPI(userData: any): Observable<any> {
    // Envoie la nouvelle utilisateur à l'API en utilisant HTTP POST
    return this.http.post<any>(this.ROOT_URL, userData);
  }
  getcurrentuserFromAPI(data: any): Observable<any> {
    return this.http.post<any>(this.ROOT_URL, data);
}

updatePlayerInAPI(user_id: number, userData: any): Observable<any> {
  let params = new HttpParams().set('user_id', user_id.toString());
  return this.http.post<any>(`${this.ROOT_URL}?action=update`, userData, { params: params });
}
  
}
