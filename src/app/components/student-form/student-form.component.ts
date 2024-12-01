import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { calculateTotal, Student } from 'src/app/model/student';
import { StudentService } from 'src/app/services/student.service';


@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {
  studentForm!: FormGroup;
fetchStudents: any;

  constructor(private fb: FormBuilder,private ss :StudentService) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.studentForm = this.fb.group({
      id: [null, Validators.required],  // Unique identifier
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],  // Name of the student
      marks: this.fb.group({            // Nested FormGroup for marks
        english: [0, [Validators.required, Validators.min(0), Validators.max(100)]],
        tamil: [0, [Validators.required, Validators.min(0), Validators.max(100)]],
        science: [0, [Validators.required, Validators.min(0), Validators.max(100)]],
        maths: [0, [Validators.required, Validators.min(0), Validators.max(100)]],
        hindi: [0, [Validators.required, Validators.min(0), Validators.max(100)]],
        total: [{ value: 0, disabled: true }]  // Total, will be calculated
      })
    });
  
    // Recalculate total whenever any mark field changes
    this.studentForm.get('marks')?.valueChanges.subscribe(marks => {
      const total = calculateTotal(marks);
      this.studentForm.get('marks.total')?.setValue(total, { emitEvent: false });
    });
  }
  

  

  onSubmit() {
    if (this.studentForm.valid) {
      const student: Student = this.studentForm.value;
      console.log('Submitted student:', student);

      // Send student data to the service
      this.ss.addStudent(student).subscribe(
        response => {
          console.log('Student added successfully:', response);
          // Optionally reset the form or show a success message
          this.studentForm.reset();
        },
        error => {
          console.error('Error adding student:', error);
          // Handle error appropriately, e.g., show a message to the user
        }
      );
    }
  }

  

}
