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

  deleteTeamByAPI(team_id:number|null): Observable<any[]>{
    const url = `${this.ROOT_URL}?team_id=${team_id}`;
    return this.http.delete<any[]>(url);
  }
  

  getTeamPlayersByAPI(team_id:number):Observable<any[]>{
    const params=new HttpParams().set('team_id',team_id.toString());
    return this.http.get<any[]>(this.ROOT_URL,{params});
  }

  updateTeamByAPI(data:any):Observable<any[]>{

    return this.http.put<any[]>(this.ROOT_URL,data);
  }
}
