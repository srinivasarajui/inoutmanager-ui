import { Injectable } from '@angular/core';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';

const  apiURL = 'https://api.kairos.com';
const  gallery_name = 'inout';
@Injectable()
export class FaceDetectService {

  private headers: HttpHeaders;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders()
            .append(`Content-Type`, 'application/json')
            .append('Accept', 'application/json')
            .append(`app_id`, environment.kairos.appId)
            .append(`app_key`, environment.kairos.appKey);
   }

  enrollEmployee(empId: string, imageBase64: string) {
    const body = {
        image: imageBase64,
        subject_id: empId,
        gallery_name: gallery_name
    };
      return this.http.post(apiURL + `/enroll`, body, {headers: this.headers} ).toPromise();
  }

  detectEmployee(imageBase64: string) {
    const body = {
        image: imageBase64,
        gallery_name: gallery_name
    };
      return this.http.post(apiURL + `/recognize`, body, {headers: this.headers} ).toPromise();
  }

}
