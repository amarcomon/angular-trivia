import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  Question,
  UserAnswer,
} from 'src/app/core/interfaces/question.interface';

@Component({
  selector: 'app-questionaire',
  templateUrl: './questionaire.component.html',
  styleUrls: ['./questionaire.component.scss'],
})
export class QuestionaireComponent {
  @Input() questions!: Question[];

  answers = new Array(5);
  showSubmitButton = false;
  resultsQuestions= new Array<Question>(5);

  constructor(private router: Router) {}

  handleUserAnswer(event: UserAnswer) {
    this.answers[event.question_id] = event.user_answer;
    this.showSubmitButton = this.answers.filter((ans) => !!ans).length === 5;
    this.resultsQuestions[event.question_id] = {
      ...this.questions[event.question_id], user_answer: event.user_answer
    }
  }

  goToResults() {
    this.router.navigate(['results'], { state: this.resultsQuestions});
  }
}
