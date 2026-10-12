import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InternshipService {

  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  //1.log a daily activity(POST request)
  logActivity(activityData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/activities`, activityData);
  }

  //2.Get activities for a specific student (GET request)
  getStudentActivities(studentId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/activities/student/${studentId}`);
  }

  //3.Submit a weekly report (POST request)
  submitWeeklyReport(reportData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/reports`, reportData);
  }
}
