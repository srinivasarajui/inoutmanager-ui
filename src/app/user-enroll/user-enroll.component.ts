import { DataService, Employee } from './../data/data.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'iom-user-enroll',
  templateUrl: './user-enroll.component.html',
  styleUrls: ['./user-enroll.component.css']
})
export class UserEnrollComponent implements OnInit {

  employees$: Observable<Employee[]>;
  constructor(private dataService: DataService, private router: Router ) {}

  ngOnInit() {
    this.dataService.changeEmployee(null);
    this.employees$ = this.dataService.getEmployeesList();
  }
  delete(emp: Employee) {

    this.dataService.delete(emp);

  }
  edit(emp: Employee) {
    this.dataService.changeEmployee(emp);
    this.router.navigate(['/EmpAdd']);
  }
  newEmp() {
    this.edit(null);
  }
}
