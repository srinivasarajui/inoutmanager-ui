import { FaceDetectService } from './../face-detect/face-detect.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'iom-check-in-out',
  templateUrl: './check-in-out.component.html',
  styleUrls: ['./check-in-out.component.css']
})
export class CheckInOutComponent implements OnInit {
  public webcam;
  userid: string;
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
  constructor( private faceDS: FaceDetectService) {
    this.userid = null;
  }

  ngOnInit() {
  }

  checkEmp() {
    console.log('started');
    this.webcam.getBase64()
    .then( base => {
      this.faceDS.detectEmployee(base)
      .then( obj => {
                      const object = obj as any;
                      console.log(JSON.stringify(object));
                      this.userid = 'Hi ' + object.images[0].candidates[0].subject_id;
                    }
          )
      .catch( e => console.log(JSON.stringify(e)));
    })
    .catch( e => console.error(e) );
  }
 }

