import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HOST_URL } from '../utils/utils';

export interface HelpRequest {
  email: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class HelpService {
  private apiUrl = `${HOST_URL}/api/profile`;
  constructor(private http: HttpClient) {}

  submitHelpRequest(request: HelpRequest): Observable<any> {
    return this.http.post(this.apiUrl, request);
  }
}
