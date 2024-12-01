import { Injectable } from '@angular/core';
import { Student, calculateTotal, Marks } from '../model/student';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'  // Makes this service available throughout the app
})
export class StudentService {
  private students: Student[] = []; // Array to store students
  private apiUrl = 'http://localhost:3001/students'; 
  constructor( private http : HttpClient) {}

  // Add a student to the list
  addStudent(student: Student): Observable<Student> {
    
    student.marks.total = calculateTotal(student.marks);

    return this.http.post<Student>(environment.url+'/students', student);

  }

  // Get the list of all students
  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(environment.url+'/students')
  }

 
}
