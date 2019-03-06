import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { ProjectMgmtService, ProjectPayload } from '../project.service';

@Component({
  templateUrl: './add_project.component.html'
})

export class AddProjectComponent {

  project: ProjectPayload = {
    name: '',
    owner: '',
    description: '',
    contributor: ''
  };

  constructor(private pro_mgmt: ProjectMgmtService, private router: Router) {
  }

  addProject() {
    console.log(this.project);
    this.pro_mgmt.addProject(this.project).subscribe((response) => {
      console.log(response);
      this.router.navigateByUrl('/');
    }, (err) => {
      console.error(err);
    });
  }


}
