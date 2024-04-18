import { Component, OnInit ,Input } from '@angular/core';
import { TeamServices } from './team-services';

@Component({
  selector: 'app-teams-console',
  templateUrl: './teams-console.component.html',
  styleUrls: ['./teams-console.component.css']
})
export class TeamsConsoleComponent implements OnInit {

  @Input() captainID:number=1;

  matchMakerOn: boolean = false;
  areThereTeams: boolean = true;
  teams: any[] = []; //teams is an empty array

  constructor(private teamServices: TeamServices) { }
  
  ngOnInit(): void {
    this.getTeams();
    console.log('Component initialized');
  }

  getTeams(): void {
    this.teamServices.getTeamsFromAPI(this.captainID).subscribe(
      (data) => {
        this.teams = data;
      },
      (error) => {
        console.error('Error fetching teams:', error);
      }
    );
  }

  toggleMatchMaker() {
    this.matchMakerOn = !this.matchMakerOn;
  }
}
