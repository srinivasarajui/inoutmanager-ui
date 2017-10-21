import { DataService, Employee } from './../data/data.service';
import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
@Component({
  selector: 'iom-emp-edit',
  templateUrl: './emp-edit.component.html',
  styleUrls: ['./emp-edit.component.css']
})
export class EmpEditComponent implements OnInit {
  employee: Employee;
  constructor(private dataService: DataService) {
    this.employee = {name: '', empid: '', id: null, profilePic: null};
   }

  ngOnInit() {
  }
  save() {
    console.log(JSON.stringify(this.employee));
    this.dataService.save(this.employee);
  }

}
