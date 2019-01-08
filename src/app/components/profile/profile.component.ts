import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  items: AngularFireList<any>;
  test010362: any[];
  constructor(db: AngularFireDatabase) {
    this.items = db.list('test010362');
  }
  ngOnInit() {
    this.items.snapshotChanges().map(actions => {
      return actions.map(action => ({ key: action.key, value: action.payload.val() }));
    }).subscribe(items => {
      this.test010362 = items;
    });
  }
}