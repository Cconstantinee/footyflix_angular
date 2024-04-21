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
  showForm:boolean=false;
  teams: any[] = []; //teams is an empty array
  selectedTeam:string='';
  selectedTeamId:number=0;
  selectedTeamName:string='';


  constructor(private teamServices: TeamServices) { }
  
  ngOnInit(): void {
    this.selectedTeamName='';
    this.getTeams();
    console.log('Component initialized');
  }

  getTeams(): void {
    this.teamServices.getTeamsFromAPI(this.captainID).subscribe(
      (data) => {
        this.teams=data;
      },
      (error) => {
        console.error('Error fetching teams:', error);
      }
    );
  }

  toggleMatchMaker() {
    this.matchMakerOn = !this.matchMakerOn;
  }
  toggleForm(){
    this.showForm=!this.showForm;
    console.log(this.showForm);
  }
  handleMessage(event:string){
    switch (event) {
      case 'close_form':
          this.toggleForm();
        break;
      case 'refresh_team_table':
          this.getTeams();
        break;

      default:
        break;
    }
  }

  consoleLog(){
    
    console.log();
  }
  extractInfo(){
    const test:string[]=this.selectedTeam.split(",");
    this.selectedTeamId=Number(test[0]);
    this.selectedTeamName=test[1];
    console.log(test);
  }
}
