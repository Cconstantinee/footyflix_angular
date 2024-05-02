import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormArray } from '@angular/forms';

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

  constructor(private fb:FormBuilder){
    this.changeNameForm=this.fb.group({
      team_name:['',[Validators.required,Validators.pattern('[a-zA-Z0-9_]+')]]
    });
    this.changePlayersForm=this.fb.group({
      players:this.fb.array([

      ])
    })
  }
 
  ngOnInit(): void {
    
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

  addPlayer(){
    const player=this.fb.group({
      position:[0,[Validators.required]],
      player_id:[0,[Validators.required]]
    })
    this.playerForms.push(player);
    this.max_player_edit++;
  }

  deletePlayer(i:number){
    
    this.playerForms.removeAt(i)
    this.max_player_edit--;
  }
}
