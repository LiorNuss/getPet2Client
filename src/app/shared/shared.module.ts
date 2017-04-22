import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InitServiceService} from "./services/init-service.service";
import {StaticDaoService} from "./services/static-dao.service";
import {ServerConnectorService} from "./services/server-connector.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers:[ServerConnectorService, StaticDaoService, InitServiceService]
})
export class SharedModule { }
