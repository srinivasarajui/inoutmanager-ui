import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'iom-check-in-out',
  templateUrl: './check-in-out.component.html',
  styleUrls: ['./check-in-out.component.css']
})
export class CheckInOutComponent implements OnInit {
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
  constructor() { }

  ngOnInit() {
  }

  genPostData() {
    this.webcam.captureAsFormData({fileName: 'file.jpg'})
    .then( formData => console.log(formData) )
    .catch( e => console.error(e) );
  }
  onCamSuccess($event) {
    console.log($event);
  }
  onCamError($event) {
    console.log($event);
  }

}
