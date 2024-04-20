import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  private readonly ROOT_URL:string='http://localhost/footyflix_php/functions/teams_service.php';

  constructor(private http:HttpClient) { }

  sendNewTeamToAPI(data:any[],Captain_ID:number): Observable<any[]>{
    
    return this.http.post<any[]>(this.ROOT_URL,{'captainID':Captain_ID,'teamDetails':data});
  }
}
