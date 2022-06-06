import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Countwords } from './interfaces/countwords';

@Injectable({
  providedIn: 'root'
})
export class WordcounterApiService {

  readonly wordCounterAPIUrl = "https://localhost:7063/api";

  constructor(private http:HttpClient) { }

  returnAllInstances():Observable<any[]>{
    return this.http.get<any>(this.wordCounterAPIUrl + '/instances');
  }

  countWords(text:string):Observable<any>{
    let words : Countwords={InstanceText : text}
    return this.http.post<any>(this.wordCounterAPIUrl + '/instances/count', words);
  }
}
