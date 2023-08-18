import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  ChipAnswers,
  Question,
  QuizMode,
  UserAnswer,
} from 'src/app/core/interfaces/question.interface';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  @Input() question!: Question;
  @Input() key!: number;
  @Input() mode!: QuizMode;
  @Output() answer = new EventEmitter<UserAnswer>();

  answers!: string[];
  options!: string[];
  isSelected = false;
  chipColor!: string;

  ngOnInit(): void {
    this.options = [
      ...this.question.incorrect_answers,
      this.question.correct_answer,
    ].sort(() => Math.random() - 0.5);
  }

  handleSelected(option: string): boolean {
    return option === this.question.user_answer;
  }

  setChipColor(option: string): string {
    if (this.mode === 'quiz') {
      return 'default';
    }
    return option === this.question.correct_answer
      ? 'green'
      : option === this.question.user_answer && option !== this.question.correct_answer
      ? 'red'
      : 'default';
  }

  getAnswers(event: ChipAnswers, key: number) {
    const userAnswer: UserAnswer = {
      question: this.question.question,
      question_id: key,
      user_answer: event.value,
      correct_answer: this.question.correct_answer,
    };
    this.answer.emit(userAnswer);
  }
}
