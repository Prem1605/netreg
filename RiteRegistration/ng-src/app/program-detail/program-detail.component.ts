import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Program } from '@app/program';
import { ProgramService } from '@app/program.service';

@Component({
  selector: 'app-program-detail',
  templateUrl: './program-detail.component.html',
  styleUrls: ['./program-detail.component.css']
})
export class ProgramDetailComponent implements OnInit {
  @Input() program: Program;

  constructor(
    private route: ActivatedRoute,
    private programService: ProgramService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getProgram();
  }

  getProgram(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.programService.getProgram(id)
      .subscribe(program => this.program = program);
  }

}
