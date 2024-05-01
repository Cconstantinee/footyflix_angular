import { Component, OnInit } from '@angular/core';
import {PlayersService} from '../../services/player-services.service';
import { TeamsService } from '../../services/teams.service';
import { StadiumService } from '../../services/stadium-service.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})

export class AdminComponent {

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

  TeamsData: any[] = [];
  fetchTeams(){
    this.TeamsService.getTeamsPlayers().subscribe(data => {
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
