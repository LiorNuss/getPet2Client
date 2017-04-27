import { NgModule } from '@angular/core';
import {MdButtonModule, MdCheckboxModule, MdDialogModule} from '@angular/material';

@NgModule({
  imports: [MdButtonModule, MdCheckboxModule,MdDialogModule],
  exports: [MdButtonModule, MdCheckboxModule,MdDialogModule]
})
export class MaterialModule { }
