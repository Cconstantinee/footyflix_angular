import { Component, Input,OnInit } from '@angular/core';
import { TeamsService } from '../../services/teams.service';

@Component({
  selector: 'app-team-viewer',
  templateUrl: './team-viewer.component.html',
  styleUrl: './team-viewer.component.css'
})
export class TeamViewerComponent {


  
  @Input() team_id:number=0;
  @Input() team_name:string='';
  @Input() captain_id:number|null=null;
  captain_name:string='user1';
  players: any[]=[1,2,3,4,5,6,7,8,9];
  

  constructor(private teamsService:TeamsService){}
  editTeam() {
    throw new Error('Method not implemented.');
    }
    deleteTeam() {
      const confirmation = prompt("Are you sure you want to delete " + this.team_name + "? Type 'yes' to confirm");
      
      
      if (confirmation === null) {
        console.log('User canceled deletion.');
        return;
      }
      
      
      const confirmationLower = confirmation.toLowerCase();
    
      
      if (confirmationLower === 'yes') {
        this.teamsService.deleteTeamByAPI(this.team_id).subscribe(
          (data) => {
            console.log(data);
          },
          (error) => {
            console.error(error); 
          }
        );
      } else {
        console.log('Deletion canceled by user.');
      }
    }
    getTeamPlayers(){
      this.teamsService.getTeamPlayersByAPI(this.team_id).subscribe(
        (data)=>{
          this.players=data;
          console.log("player details",this.players);
        },
        (error)=>{console.log("problem getting team players:",error)}
      )
    }
    
    
}
