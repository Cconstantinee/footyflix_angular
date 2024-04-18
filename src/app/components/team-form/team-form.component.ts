import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-team-form',
  templateUrl: './team-form.component.html',
  styleUrl: './team-form.component.css'
})
export class TeamFormComponent {
  display = "none";
  ngOnInit() {
   }
openModal() {
    this.display = "block";
  }
  closeModal() {
    this.display = "none";
  }
}
