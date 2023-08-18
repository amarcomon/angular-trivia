import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Category } from 'src/app/core/interfaces/category.interface';
import {
  Question,
  QuestionParam,
} from 'src/app/core/interfaces/question.interface';
import { TriviaService } from 'src/app/services/trivia.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  categories$!: Observable<Category[]>;
  questions$!: Observable<Question[]>;
  difficulties = [
    {
      id: 1,
      name: 'easy',
    },
    {
      id: 2,
      name: 'medium',
    },
    {
      id: 3,
      name: 'hard',
    },
  ];

  category = new FormControl('category');
  difficulty = new FormControl('difficultyForm');

  constructor(private readonly triviaService: TriviaService) {}

  ngOnInit(): void {
    this.categories$ = this.triviaService.getCategories();
  }

  createQuestionaire(): void {
    const questionParams: QuestionParam = {
      amount: 5,
      category: Number(this.category.value),
      difficulty: String(this.difficulty.value),
      type: 'multiple',
    };
    this.questions$ = this.triviaService.getQuestions(questionParams);
  }
}
