import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

export class FileUpload {
  $key: string;
  name: string;
  url: string;
  file: File;
  constructor(file: File) {
    this.file = file;
  }
}

export interface Employee {
  id: any;
  name: string;
  empid: string;
  profilePic: FileUpload;
}



@Injectable()
export class DataService {
  private employeeCollection: AngularFirestoreCollection<Employee>;
  constructor(private db: AngularFirestore) {
    this.employeeCollection = db.collection<Employee>('employees');
  }
  getEmployeesList(): Observable<Employee[]> {
    return this.employeeCollection.valueChanges();
  }
  save(item: Employee) {

    if (item.id) {
      console.log('update');
    }else {
    item.id =  this.db.createId();
    this.employeeCollection.add(item);
    console.log('created' + item.name);
    }
  }
}
