import { DataService, Employee } from './../data/data.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'iom-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  employees$: Observable<Employee[]>;
  constructor(private dataService: DataService, private router: Router ) {}

  ngOnInit() {
    this.dataService.changeEmployee(null);
    this.employees$ = this.dataService.getEmployeesList();
  }
 
 

}
