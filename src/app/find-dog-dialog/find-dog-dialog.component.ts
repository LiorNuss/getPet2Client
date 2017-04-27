import { Component, OnInit } from '@angular/core';

import {FindDogFormComponent} from "../find-dog-form/find-dog-form.component";
import {MdDialog} from "@angular/material";

@Component({
  selector: 'app-find-dog-dialog',
  templateUrl: './find-dog-dialog.component.html',
  styleUrls: ['./find-dog-dialog.component.css']
})
export class FindDogDialogComponent implements OnInit {

  constructor(public dialog: MdDialog) {}

  openDialog() {
    this.dialog.open(FindDogFormComponent);
  }
  ngOnInit() {
  }

}
