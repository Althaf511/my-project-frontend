import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/model/student';
import { StudentService } from 'src/app/services/student.service';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];  // List of students
  studentForm: any;

  constructor(private ss : StudentService) {}

  ngOnInit(): void {
    this.onFetch();
  }

  onFetch() {

    this.ss.getStudents().subscribe(
      (data) => {
        this.students = data; // Assign the fetched students to the component property
      },
      (error) => {
        console.error('Error fetching students:', error);
      }
    );
    
  }
}
