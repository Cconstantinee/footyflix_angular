import { Component } from '@angular/core';

@Component({
  selector: 'app-teams-console',
  templateUrl: './teams-console.component.html',
  styleUrl: './teams-console.component.css'
})
export class TeamsConsoleComponent {
  matchMakerOn:boolean=false;
  areThereTeams: boolean=true;

  toggleMatchMaker(){
    this.matchMakerOn=!this.matchMakerOn;
  }
}
