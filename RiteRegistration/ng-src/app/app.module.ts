import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProgramComponent } from './program/program.component';
import { ProgramDetailComponent } from './program-detail/program-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgramComponent,
    ProgramDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
