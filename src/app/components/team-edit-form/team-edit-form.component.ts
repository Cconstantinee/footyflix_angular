import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormArray } from '@angular/forms';
import { PlayersService } from '../../services/player-services.service';
import { duplicatePlayerIdValidator } from './duplicatePlayerIdValidator';
import { duplicatePositionValidator } from './duplicatePositionValidator';
import { TeamsService } from '../../services/teams.service';
@Component({
  selector: 'app-team-edit-form',
  templateUrl: './team-edit-form.component.html',
  styleUrl: './team-edit-form.component.css'
})
export class TeamEditFormComponent implements OnInit,OnDestroy {

  changeNameForm:FormGroup;
  changePlayersForm:FormGroup;
  team_name:string='';
  max_player_edit:number=0;
  PlayerList:any;
  @Input() team_id:number|null=null;
  @Output() messageEvent=new EventEmitter();

  constructor(private fb:FormBuilder ,private playerService:PlayersService,private teamsService:TeamsService){
    this.changeNameForm=this.fb.group({
      team_name:['',[Validators.required,Validators.pattern('[a-zA-Z0-9_]+')]],
      team_id:[]
    });
    this.changePlayersForm=this.fb.group({
      players:this.fb.array([

      ])
    })
    
  }
 
  ngOnInit(): void {
    this.playerService.getPlayersFromAPI().subscribe(
      (data) => {
        this.PlayerList = data;
      }
    );
  
    this.changeNameForm.patchValue({
      team_id: this.team_id
    });
  }
  
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  changeName(){
    this.team_name=this.changeNameForm.value.team_name
  }

  get playerForms(){
    return this.changePlayersForm.get('players') as FormArray
  }

  addPlayer() {
    const player = this.fb.group({
      position: ['', [Validators.required,duplicatePositionValidator(this.getPlayerPositions())]],
      player_id: [, [Validators.required, duplicatePlayerIdValidator(this.getPlayerIds())]]
    });
    this.playerForms.push(player);
    this.max_player_edit++;
  }
  
  private getPlayerIds(): number[] {
    const playerIds: number[] = [];
  
    this.playerForms.controls.forEach(control => {
      const playerIdControl = control.get('player_id');
      if (playerIdControl && playerIdControl.value !== null && playerIdControl.value !== undefined) {
        const playerId = parseInt(playerIdControl.value, 10); // Assuming player_id is numeric
        if (!isNaN(playerId)) {
          playerIds.push(playerId);
        }
      }
    });
  
    return playerIds;
  }
  

  deletePlayer(i:number){
    
    this.playerForms.removeAt(i)
    this.max_player_edit--;
  }

  private getPlayerPositions():number[]{

    const playerPositions:number[]=[];
    this.playerForms.controls.forEach(control => {
      const positionControl = control.get('position');
      if (positionControl && positionControl.value !== null && positionControl.value !== undefined) {
        const position = parseInt(positionControl.value, 10); // Assuming player_id is numeric
        if (!isNaN(position)) {
          playerPositions.push(position);
        }
      }
    });

    return playerPositions ;
  }
  
  getPositions(){
    console.log("this is working");
    const res=this.getPlayerPositions();
    console.log(res);
  }
  
  submitPlayerForm(){
    if(this.changePlayersForm.valid){
      console.log("form is valid")
      this.teamsService.updateTeamByAPI(this.team_id,this.changePlayersForm.getRawValue).subscribe(
        
      )
      console.log(this.changePlayersForm.getRawValue)
    }
    else{
      console.log('form invalid, check your inputs')
    }
  }
  submitNameForm(){
    if(this.changePlayersForm.valid){
      console.log("form is valid")
      this.teamsService.updateTeamNameByAPI(this.team_id,this.changeNameForm.value.team_name).subscribe(
        (response) => {
          console.log('Response:', response);
          // Handle the response data here
        },
        (error) => {
          console.error('Error:', error);
          // Handle any errors that occurred
        }
        
      )
      this.messageEvent.emit('refresh_teams');
    }
    else{
      console.log('form invalid, check your inputs')
    }
  }
  
}
