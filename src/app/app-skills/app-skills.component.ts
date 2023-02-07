import { Component } from '@angular/core';

@Component({
  selector: 'app-app-skills',
  templateUrl: './app-skills.component.html',
  styleUrls: ['./app-skills.component.css']
})
export class AppSkillsComponent {
  skills = [
    {name:'c++', score:20},
    {name:'c#', score:40},
    {name:'php', score:60}
  ];

  btnclicked() {
    console.log("downloading");
  }
}
