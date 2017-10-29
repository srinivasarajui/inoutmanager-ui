
import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection  } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import * as firebase from 'firebase';

export interface Employee {
  id?: string;
  name: string;
  empid: string;
  photo?: string;
  photosListURLs?: string[];
  photosList?: string[];
}

@Injectable()
export class DataService {
  private basePath = '/uploads';
  private employeeCollection: AngularFirestoreCollection<Employee>;
  private employeeList$: Observable<Employee[]>;
  private defaultEmployee = { name: '', empid: '', photosList: [] };
  private employeeSource = new BehaviorSubject<Employee>({ ...this.defaultEmployee });
  currentEmployee = this.employeeSource.asObservable();
  constructor(private db: AngularFirestore) {
    this.employeeCollection = db.collection<Employee>('employees');
    this.getEmpObserable();
   }
   private async putFile(photo: string, path: string) {
    const storageRef = firebase.storage().ref();
    const iRef  = storageRef.child(`${this.basePath}/${path}`);
    await iRef.putString(photo.substr(22), 'base64');
    return iRef.getDownloadURL();
   }
   getEmpObserable() {
    this.employeeList$ = this.employeeCollection.snapshotChanges().map(actions => {
      return actions.map(action => {
        const data = action.payload.doc.data() as Employee;
        const id = action.payload.doc.id;
        const photo = data && data.photosListURLs.length > 0 ? data.photosListURLs[0] : null;
        return { id, photo, ...data };
      });
    });
   }
  changeEmployee(obj: Employee) {
    if (obj) {
      this.employeeSource.next(obj);
    } else {
      this.employeeSource.next({ ...this.defaultEmployee });
    }
  }
  getEmployeesList(): Observable<Employee[]> {
    return this.employeeList$;
  }
  delete(item: Employee) {
    this.employeeCollection.doc(item.id).delete();
  }
  async save(item: Employee) {

    if (item.id) {
      this.employeeCollection.doc(item.id).update(item);
    } else {
      const phototList: string[] = [];
      try {
        await Promise.all(item.photosList.map(
          async (element, index) => {
            console.log(index);
            try {
              const path = await this.putFile(element, item.empid + '/' + index);
              console.log(path);
              phototList.push(path);
            } catch (error) {
              console.log(JSON.stringify(error));
            }

          }
        ));
        this.employeeCollection.add({...item, photosListURLs: phototList});
        console.log('created' + item.name);
      } catch (error) {
        console.log(JSON.stringify(error));
      }
    }
    this.getEmpObserable();
    this.changeEmployee(null);
  }
}
