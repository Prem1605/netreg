import { Component, OnInit } from '@angular/core';
import { Program } from '@app/program';
import { ProgramService } from '@app/program.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  programs: Program[] = [];

  constructor(private programService: ProgramService) { }

  ngOnInit() {
    this.getPrograms();
  }

  getPrograms(): void{
    this.programService.getPrograms()
      .subscribe(p => this.programs = p.slice(1, 5));
  }

}
