import { Component, signal } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {InternshipService} from './services/internship.service';
import {response} from 'express';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  title = 'internship- frontend';

  activity = {
    studentId: 1,
    activityDate: '',
    taskDescription: '',
    hoursSpent: null
  };

  message = '';
  errorMessage = '';

  constructor(private internshipService: InternshipService) { }

  onSubmitActivity() {
    this.message = '';
    this.errorMessage = '';

    this.internshipService.logActivity(this.activity).subscribe({
      next: (response) => {
        this.message = 'Daily activity successfully logged to the database!';
        console.log('Success: ', response);
      },
      error: (err) => {
        this.errorMessage = 'Failed to log activity: ' + (err.erro?.message || err.message);
        console.error('Error: ', err);
      }
    });
  }
}
