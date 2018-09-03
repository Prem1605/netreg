import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '@app/app.component';
import { DashboardComponent } from '@app/dashboard/dashboard.component';
import { ProgramComponent } from '@app/program/program.component';
import { ProgramDetailComponent } from '@app/program-detail/program-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/app', pathMatch: 'full' },
  { path: 'app', component: AppComponent },
  { path: 'app/dashboard', component: DashboardComponent },
  { path: 'app/programs', component: ProgramComponent },
  { path: 'app/detail/:id', component: ProgramDetailComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
