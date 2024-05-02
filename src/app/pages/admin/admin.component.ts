import { Component, OnInit } from '@angular/core';
import {PlayersService} from '../../services/player-services.service';
import { TeamsService } from '../../services/teams.service';
import { StadiumService } from '../../services/stadium-service.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})

export class AdminComponent implements OnInit {

  //CONSTRUCTOR FOR ALL SERVICES
  
  constructor(private PlayersService: PlayersService, private TeamsService: TeamsService,private stadiumService: StadiumService){}  
  
  //TO LOAD DATA WHEN COMPONENT IS INITIALIZED

  ngOnInit(){
    this.fetchPlayers();
    this.fetchTeams();
    this.fetchStadiums();
  }  

  //GET PLAYERS
  
  PlayersData: any[] = [];

  fetchPlayers(){
    this.PlayersService.getPlayersFromAPI().subscribe(data => {
      this.PlayersData = data;
    })
  }

  //GET TEAMS

  TeamsData: any;
  fetchTeams(){
    this.TeamsService.getTeamsFromAPI().subscribe(data => {
      this.TeamsData= data;
    })
  }

  //GET STADIUMS

  StadiumsData: any[] = [];
  fetchStadiums() {
    this.stadiumService.getStadiumsFromAPI().subscribe(data => {
      this.StadiumsData = data;
    });
  }
  
  // Delete stadium
  deleteStadiumOnClick(stadiumId: number){
    console.log("deleting stadium in progress :",stadiumId)
    this.stadiumService.deleteStadium(stadiumId).subscribe(
      (data)=>{
        console.log(data);
      },
      error=>{
        console.error('Error when deleting stadium: ',error);
      }
    );
    this.fetchStadiums();
  }

  // Add stadium
  addStadium(stadiumName: string, managerId: number){
    this.stadiumService.createStadiums(stadiumName, managerId).subscribe(
      ()=>{
        console.log(`Stadium ${stadiumName} managed by the manager having the id ${managerId} successfully created.`);
      },
      error=>{
        console.error('Error when creating stadium: ',error);
      }
    );
  }

  // Update stadium
  updateStadium(stadiumId: number, stadiumName: string, managerId: number){
    this.stadiumService.editStadium(stadiumId, stadiumName, managerId).subscribe(
      ()=>{
        console.log(`Stadium with id ${stadiumId} successfully updated.`);
      },
      error=>{
        console.error('Error when updating stadium: ',error)
      }
    )
  }

  //SHOWTAB FUNCTION
  showtable: String="Players";
  switchtab(condition: String) {
    console.log("button clicked",condition);
    switch (condition) {
      case "Players":
        this.showtable="Players";
        this.fetchPlayers();
        break;
      case "Teams":
        this.showtable="Teams";
        this.fetchTeams();
        break;
      case "Stadiums":
        this.showtable="Stadiums";
        this.fetchStadiums();
        break;
      default:
        break;
    }
  }
}
