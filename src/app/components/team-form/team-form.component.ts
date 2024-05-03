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
  sendForm() {
    // Check conditions for form completeness
    if (
        this.selectedPlayers.length % 2 !== 0 ||
        !this.selectedPlayers.includes(this.Captain_ID) ||
        this.team_name === ''
    ) {
        // Handle incomplete form
        console.log("Form not complete!");
        alert("Insufficient number of players, missing a name, or you forgot to select yourself.");
    } else {
        // Assign team name to the first element of selectedPlayers array
        this.selectedPlayers[0] = this.team_name;

        // Check if Captain_ID is not null
        if (this.Captain_ID !== null) {
            // Send team data to API using teamsService
            this.teamsService.sendNewTeamToAPI(this.selectedPlayers, this.Captain_ID).subscribe(
                (data) => {
                    // Handle successful response from API
                    console.log("Teams API response:", data);
                    // Optionally, you can emit an event or perform additional actions based on the response
                    this.messageEvent.emit("refresh_team_table");
                    this.closeModal(); // Close modal after successful form submission
                },
                (error) => {
                    // Handle error response from API
                    console.log("Error sending team to API:", error);
                    // Check if there's a specific error response from the backend
                    if (error.error && error.error.message) {
                        console.log("Backend Error:", error.error.message);
                        alert("Backend Error: " + error.error.message); // Display backend error message to the user
                    } else {
                        alert("An unexpected error occurred. Please try again."); // Generic error message
                    }
                }
            );
        } else {
            console.log("Captain_ID is null. Cannot send team to API.");
            // Handle scenario where Captain_ID is null (optional based on your application logic)
        }
    }
}

  reloadComponent() {
    this.router.navigate([this.router.url]);
}
 
  
}
