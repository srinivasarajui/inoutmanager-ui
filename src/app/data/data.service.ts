
import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export interface Employee {
  id?: string;
  name: string;
  empid: string;
  photo?: string;
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
   getEmpObserable() {
    this.employeeList$ = this.employeeCollection.snapshotChanges().map(actions => {
      return actions.map(action => {
        const data = action.payload.doc.data() as Employee;
        const id = action.payload.doc.id;
        const photo = data && data.photosList.length > 0 ? data.photosList[0] : null;
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
  save(item: Employee) {

    if (item.id) {
      this.employeeCollection.doc(item.id).update(item);
    } else {
      this.employeeCollection.add(item);
      console.log('created' + item.name);
    }
    this.getEmpObserable();
    this.changeEmployee(null);
  }
}
