import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Program } from '@app/program';
import { Programs } from '@app/mock-programs';
import { MessageService } from '@app/message.service';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  constructor(private messageService: MessageService) { }

  getPrograms(): Observable<Program[]> {
    // TODO: send the message _after_ fetching the programs
    this.messageService.add('ProgramService: fetched programs');
    return of(Programs);
  }
}
