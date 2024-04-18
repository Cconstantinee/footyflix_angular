import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-team-form',
  templateUrl: './team-form.component.html',
  styleUrl: './team-form.component.css'
})
export class TeamFormComponent {
  display = "none";
  position=new Array<number|null>(11);
  

  ngOnInit() {
   }
openModal() {
    this.display = "block";
  }
  closeModal() {
    this.display = "none";
  }
  getPos($event: number | null,position:number){
    this.position[position]=$event;
  }
}
