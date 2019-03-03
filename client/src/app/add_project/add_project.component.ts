import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './add_project.component.html'
})


export class AddProjectComponent{

  project = {
    name: '',
    owner: '',
    description: '',
    contributor:''
  };

  constructor( private router: Router) {}

  addProject() {
    this.addProject(this.project).subscribe(() => {
      this.router.navigateByUrl('/api/project');
    }, (err) => {
      console.error(err);
    });
  }

}
