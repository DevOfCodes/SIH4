import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { Router } from '@angular/router';

export interface ProjectDetails {
  _id: string;
  name: string;
  owner: string;
  description: string;
  contributor: string;
}

export interface ProjectPayload {
  name: string;
  owner: string;
  description: string;
  contributor: string;
}

@Injectable()
export class ProjectMgmtService {

  constructor(private http: HttpClient, private router: Router) {}

  private request(method: 'post'|'get', type: 'project', project?: Object): Observable<any> {
    let base;

    if (method === 'post') {
      base = this.http.post(`http://localhost:3000/api/${type}`, project);
    } else {
      base = this.http.get(`http://localhost:3000/api/${type}`);
    }

    const request = base.pipe(
      map((data: ProjectDetails) => {
        return data;
      })
    );

    return request;
  }

  public addProject(project:Object) : Observable<any>{
    return this.request("post","project",project);
  }

  public getProjects() : Observable<any>{
    return this.request("get","project");
  }

}



