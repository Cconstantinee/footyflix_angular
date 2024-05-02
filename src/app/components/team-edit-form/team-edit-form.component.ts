import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormArray } from '@angular/forms';
import { PlayersService } from '../../services/player-services.service';
import { duplicatePlayerIdValidator } from './duplicatePlayerIdValidator';

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


  constructor(private fb:FormBuilder ,private playerService:PlayersService){
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
      position: ['', [Validators.required]],
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

  duplicatePositionValidator(control: FormGroup): { [key: string]: any } | null {
    const position = control.get('position')?.value;
    const playerForms = control.parent?.parent?.get('players') as FormArray;
  
    if (!position || !playerForms) {
      return null; // Validator shouldn't fail if there is no position or playerForms is not available
    }
  
    const positions = playerForms.controls.map(ctrl => ctrl.get('position')?.value ?? 'empty'); // Use optional chaining and default value
    const duplicateIndex = positions.indexOf(position, 1); // Start from the second element to avoid self comparison
  
    return duplicateIndex !== -1 ? { duplicatePosition: true } : null;
  }
  
  
  

  
}
