import { Component, OnInit,Input, Output, EventEmitter} from '@angular/core';
import { PlayersService } from '../../services/player-services.service';
import { TeamsService } from '../../services/teams.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/authentication.service';


@Component({
  selector: 'app-team-form',
  templateUrl: './team-form.component.html',
  styleUrls: ['./team-form.component.css'] // Corrected styleUrl to styleUrls
})
export class TeamFormComponent implements OnInit {
  display = "none";
  allPlayers: any[] = [];
  selectedPlayers: (number | null |string)[] = new Array<number | null|string>;
  Captain_ID:number|null=null;
  @Output() messageEvent = new EventEmitter<string>();

  team_name:string='';
  constructor(private playersService: PlayersService, private teamsService:TeamsService,private router:Router,public authService:AuthService) { }
  
  ngOnInit() {
    this.Captain_ID=this.authService.getUserIdFromToken();
    console.log("captain_id:",this.Captain_ID)
    this.getPlayers(); // Fetch players when component initializes
  }

  getPlayers(): void {
    this.playersService.getPlayersFromAPI().subscribe(
      (data) => {
        console.log("API Response:", data); // check API response
        console.log(this.team_name, " Selected Players:", this.selectedPlayers); // check selection update
        
        // Filter out already selected players
        this.allPlayers = data.filter(player => !this.selectedPlayers.includes(player.user_id)); 
        
        // Check if there is only one slot left and the captain's ID hasn't been selected
        const remainingSlots = 11 - this.selectedPlayers.length+this.countEmptySlots(this.selectedPlayers);
        const captainSelected = this.selectedPlayers.includes(this.Captain_ID); // Assuming captainId is the variable holding the captain's ID
        
        console.log("remainign slots",remainingSlots," is captain selected? :",this.Captain_ID,this.selectedPlayers.includes(this.Captain_ID));
        if (remainingSlots === 1 && !captainSelected) {
          // Only one slot left and captain not selected, filter the allPlayers array to contain only the captain's ID
          this.allPlayers = this.allPlayers.filter(player => player.user_id === this.Captain_ID);
        }
        
        console.log("Filtered Player List:", this.allPlayers); // check new filtered list
      },
      (error) => {
        console.error('Error fetching players:', error);
      }
    );
  }
  
  countEmptySlots(data: any[]): number {
    let emptyCount: number = 0;
  
    // Iterate over each element in the array
    for (let i = 0; i < data.length; i++) {
      // Check if the slot is empty (you can define your own conditions here)
      if (data[i] === undefined || data[i] === null || data[i] === '') {
        emptyCount++;
      }
    }
  
    return emptyCount;
  }
  

  closeModal() {
    this.messageEvent.emit("close_form");
  }

  getPos($event: number | null, position: number) {
    this.selectedPlayers[position] = $event;
    this.getPlayers(); // Update player list whenever a player is selected
  }
  sendForm(){
    
    if((this.selectedPlayers.length%2!=0)||(!this.selectedPlayers.includes(this.Captain_ID))||(this.team_name=='')){
      console.log("form not complete!");
      alert("insufficent number of players, missing a name or you forgot yourself (this is a placeholder text)");
    }
    else{
      this.selectedPlayers[0]=this.team_name;
      
      if(this.Captain_ID!=null){
        this.teamsService.sendNewTeamToAPI(this.selectedPlayers,this.Captain_ID).subscribe(
          (data) => {
            console.log("teamsAPI response", data);
          },
          (error) => {
            console.log("Error sending team to API:", error);
            
          }
        )
      }
      console.log("form submitted ",this.selectedPlayers);
      this.messageEvent.emit("refresh_team_table");
      this.closeModal();
    }
  }
  reloadComponent() {
    this.router.navigate([this.router.url]);
}
 
  
}
