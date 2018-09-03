import { Component, OnInit } from '@angular/core';
import { Program } from '@app/program';
import { ProgramService } from '@app/program.service';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent implements OnInit {  
  programs: Program[];

  constructor(private programService: ProgramService) { }

  ngOnInit() {
    this.getPrograms();
  }

  getPrograms(): void {
    this.programService.getPrograms().subscribe(p => this.programs = p);
  }

}
