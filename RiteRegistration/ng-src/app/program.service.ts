import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Program } from '@app/program';
import { MessageService } from '@app/message.service';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) { }

  private programsUrl = 'https://localhost:5011/api/programs';

  getPrograms(): Observable<Program[]> {
    var apiResult = this.http.get<Program[]>(this.programsUrl).pipe(
      tap(programs => this.log('fetched programs ' + programs.length)),
      catchError(this.handleError('getPrograms', []))
    );

    return apiResult;
  }

  getProgram(id: number): Observable<Program> {
    const url = `${this.programsUrl}/${id}`;

    var apiResult = this.http.get<Program>(url)
      .pipe(
        tap(_ => this.log(`fetched program id=${id}`)),
        catchError(this.handleError<Program>(`getProgram id=${id}`))
      );

    return apiResult;
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`ProgramService: ${message}`);
  }

}
