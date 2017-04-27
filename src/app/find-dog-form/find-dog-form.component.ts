import { Component, OnInit } from '@angular/core';
import {InitServiceService} from "../shared/services/init-service.service";
import {ClientData} from "../shared/classes/owner-data";

@Component({
  selector: 'app-find-dog-form',
  templateUrl: './find-dog-form.component.html',
  styleUrls: ['./find-dog-form.component.css']
})
export class FindDogFormComponent implements OnInit {


  constructor(initService:InitServiceService) {
    this.initService = initService;
  }
  model = new ClientData("","",18,"","","","","","","","","","","","","","");
  exampleOptions;
  submitted = false;
  initService;

  onSubmit() { this.submitted = true; }

  ngOnInit() {
    this.exampleOptions = this.initService.fetchOptions();
  }
}
