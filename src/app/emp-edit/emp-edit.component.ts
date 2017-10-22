import { FaceDetectService } from './../face-detect/face-detect.service';
import { DataService, Employee } from './../data/data.service';
import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'iom-emp-edit',
  templateUrl: './emp-edit.component.html',
  styleUrls: ['./emp-edit.component.css']
})
export class EmpEditComponent implements OnInit {
  public webcam;
  public options = {
    audio: false,
    video: true,
    width: 500,
    height: 500,
    fallbackMode: 'callback',
    fallbackSrc: 'jscam_canvas_only.swf',
    fallbackQuality: 85,
    cameraType: 'front' || 'back'
  };
  employee: Employee;
  constructor(private dataService: DataService, private router: Router, private faceDS: FaceDetectService) {}

  ngOnInit() {
    this.dataService.currentEmployee.subscribe(emp => this.employee = emp);
  }
  save() {
    this.employee.photosList.forEach( item => {
      this.faceDS.enrollEmployee(this.employee.empid, item)
      .then( () => console.log('enrolled'))
      .catch( error => console.log(JSON.stringify(error)));
    });
    this.dataService.save({...this.employee, photosList : []});
    this.router.navigate(['/empList']);
  }
  addPhotoToList() {
    this.webcam.getBase64()
    .then( base => {
      this.employee = {...this.employee, photosList: [...this.employee.photosList, base] };
    })
    .catch( e => console.error(e) );
  }

}
