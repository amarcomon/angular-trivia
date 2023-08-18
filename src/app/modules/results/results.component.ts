import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from 'src/app/core/interfaces/question.interface';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {
  questions!: Question[];
  correctAnswers!: number;

  constructor(private router: Router) {}

  ngOnInit() {
    this.questions = this.router.lastSuccessfulNavigation?.extras?.state as Question[]
    this.correctAnswers = this.questions.filter((question) => question.correct_answer === question.user_answer).length
 }

  goToQuiz() {
    this.router.navigate(['']);
  }

  setBackgroundColor(): string {
    return this.correctAnswers >= 4 ? 'green' : this.correctAnswers <= 1 ? 'red' : 'yellow'
  }
}
