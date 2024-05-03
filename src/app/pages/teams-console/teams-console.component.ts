import { Component, OnInit ,Input,Output, EventEmitter } from '@angular/core';
import { TeamServices } from './team-services';
import { AuthService } from '../../services/authentication.service';



@Component({
  selector: 'app-teams-console',
  templateUrl: './teams-console.component.html',
  styleUrls: ['./teams-console.component.css']
})
export class TeamsConsoleComponent implements OnInit {

  @Output() message=new EventEmitter();
 captainID:number|null=this.authService.getUserIdFromToken();

  toggleEdit:boolean=false;
  matchMakerOn: boolean = false;
  areThereTeams: boolean = true;
  showForm:boolean=false;
  teams: any[] = []; //teams is an empty array
  selectedTeam:string='';
  selectedTeamId:number=0;
  selectedTeamName:string='';


  constructor(private teamServices: TeamServices,public authService:AuthService) { }
  
  ngOnInit(): void {
    this.selectedTeamName='';
    this.getTeams();
    console.log('Component initialized');
    
  }

  getTeams(): void {
    if (this.captainID != null) {
      this.teamServices.getTeamsFromAPI(this.captainID).subscribe(
        (data) => {
          this.teams = data;
        },
        (error) => {
          console.error('Error fetching teams:', error);
        }
      );
    }
  }
  

  toggleMatchMaker() {
    this.matchMakerOn = !this.matchMakerOn;
    this.message.emit(this.matchMakerOn);
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
