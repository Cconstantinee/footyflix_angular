import { Component, EventEmitter, Input,OnInit, Output, SimpleChanges } from '@angular/core';
import { TeamsService } from '../../services/teams.service';

@Component({
  selector: 'app-team-viewer',
  templateUrl: './team-viewer.component.html',
  styleUrl: './team-viewer.component.css'
})
export class TeamViewerComponent {


  @Output() MessageEvent= new EventEmitter();
  @Input() team_id:number=0;
  @Input() team_name:string='';
  @Input() captain_id:number|null=null;
  captain_name:string='user1';
  players: any[]=[];
  ngOnInit(): void {
    // Call getTeamPlayers when component is loaded

  
    this.getTeamPlayers();
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Call getTeamPlayers when team_id changes
    if (changes['team_id'] && !changes['team_id'].firstChange) {
      this.getTeamPlayers();

    }
  }

  constructor(private teamsService:TeamsService){}
  editTeam() {
    this.MessageEvent.emit('toggle_edit');
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
          this.players=data.map(data=>({
            user_id:data.user_id,
            psudo:data.psudo,
            position:data.position
          }));
          console.log("player details",this.players);
        },
        (error)=>{console.log("problem getting team players:",error)}
      )
    }
    getPsudoByPosition(position: number): string {
      const player = this.players.find(item => item.position === position);
      return player ? player.psudo : 'Not Found';
    }
    
    
}
