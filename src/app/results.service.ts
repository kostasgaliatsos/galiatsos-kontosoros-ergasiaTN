import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  constructor(private http: HttpClient) { }
  
  callService(item: any) {
    const formData = new FormData();
    formData.append('image', item);
    return this.http.post('http://galiatsoskontosorostn.eu.pythonanywhere.com/results',formData)
    
  }
}
