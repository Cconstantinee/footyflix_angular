import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StadiumService {

  private readonly ROOT_URL:string='http://localhost/footyflix_php/functions/stadium_service.php'
  private readonly DELETE_URL:string='http://localhost/footyflix_php/functions/delete_stadium.php'
  
  constructor(private http: HttpClient) { }

  getStadiumsFromAPI(): Observable<any[]> {
    return this.http.get<any[]>(this.ROOT_URL);
  }

  deleteStadium(stadiumId: number): Observable<any> {
    const url = `${this.DELETE_URL}?stadium_id=${stadiumId}`;
    return this.http.delete<any>(url);
  }

  createStadiums(stadiumName: string, managerId: number): Observable<void>{
    const body={stadium_name: stadiumName, manager_id: managerId};
    return this.http.post<void>(this.ROOT_URL, body);

  }

  editStadium(stadiumId: number,stadiumName: string, managerId: number): Observable<void>{
    const body={stadium_id: stadiumId, stadium_name: stadiumName, manager_id: managerId};
    return this.http.put<void>(this.ROOT_URL, body);
  }
}
