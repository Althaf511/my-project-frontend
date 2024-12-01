// student.model.ts

export interface Marks {
    english: number;                // Marks in English
    tamil: number;                  // Marks in Tamil
    science: number;                // Marks in Science
    maths: number;                  // Marks in Maths
    hindi: number;                  // Marks in Hindi
    total: number;                  // Total marks calculated from all subjects
  }
  
  export interface Student {
    id: number;                     // Unique identifier for the student
    name: string;                   // Name of the student
    marks: Marks;                   // Associate marks with the student
  }
  
  // Function to calculate total marks
  export function calculateTotal(marks: Marks): number {
    return marks.english + marks.tamil + marks.science + marks.maths + marks.hindi;
  }
  