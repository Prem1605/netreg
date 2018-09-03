import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgramComponent } from '@app/program/program.component';

const routes: Routes = [
  { path: 'app', component: ProgramComponent },
  { path: 'app/programs', component: ProgramComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
