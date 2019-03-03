import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './techWindow.component.html'
})
export class TechWindowComponent {

  repository ='';

  constructor(private router: Router) {}
  repoSubmit(){
    console.log(this.repository);
  }

}
