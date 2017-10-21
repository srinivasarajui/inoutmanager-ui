import { DataService, Employee } from './../data/data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'iom-user-enroll',
  templateUrl: './user-enroll.component.html',
  styleUrls: ['./user-enroll.component.css']
})
export class UserEnrollComponent implements OnInit {

  employees$: Observable<Employee[]>;
  constructor(private dataService: DataService) {
    this.employees$ = dataService.getEmployeesList();
  }

  ngOnInit() {
  }

}
