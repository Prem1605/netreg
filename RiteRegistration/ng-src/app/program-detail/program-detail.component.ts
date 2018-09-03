import { Component, OnInit, Input } from '@angular/core';
import { Program } from '@app/program';

@Component({
  selector: 'app-program-detail',
  templateUrl: './program-detail.component.html',
  styleUrls: ['./program-detail.component.css']
})
export class ProgramDetailComponent implements OnInit {
  @Input() program: Program;  
  
  constructor() { }

  ngOnInit() {
  }

}
