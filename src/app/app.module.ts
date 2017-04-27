import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {SharedModule} from "./shared/shared.module";
import { MainComponent } from './main/main.component';
import { FindDogFormComponent } from './find-dog-form/find-dog-form.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import { FindDogDialogComponent } from './find-dog-dialog/find-dog-dialog.component';
import {InitServiceService} from "./shared/services/init-service.service";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FindDogFormComponent,
    FindDogDialogComponent
  ],
  imports: [
    BrowserAnimationsModule,
    NoopAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    SharedModule
  ],
  entryComponents: [
    FindDogFormComponent
  ],
  providers: [InitServiceService],
  bootstrap: [AppComponent],
  exports: [MainComponent]
})
export class AppModule { }
