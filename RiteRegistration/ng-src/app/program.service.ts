import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Program } from '@app/program';
import { Programs } from '@app/mock-programs';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  constructor() { }

  getPrograms(): Observable<Program[]> {
    return of(Programs);
  }
}
