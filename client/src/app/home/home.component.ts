import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { ProjectMgmtService, ProjectPayload } from '../project.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  projects : Array<any> = [];

  constructor(    private router: Router, private pro_mgmt:ProjectMgmtService){
    this.pro_mgmt.getProjects().subscribe((response) => {
      this.projects = response.data;
      console.log(this.projects);
      }, (err) => {
      console.error(err);
    });
  }
  onFinancialContributeClick(){
    this.router.navigateByUrl('/paymentWindow');
  }
  onTechnicalContributeClick(){
    this.router.navigateByUrl('/techWindow');
  }

}
