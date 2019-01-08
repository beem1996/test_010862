import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  constructor(private db:AngularFireDatabase) { }
  ngOnInit() {}
  addWiki(data: NgForm){
    // console.log(data.value);
    this.db.list("/test010362").push(data.value);
  }
}
