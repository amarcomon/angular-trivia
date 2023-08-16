import { Component, OnInit } from '@angular/core';
import {
  Categories,
  Category,
} from 'src/app/core/interfaces/category.interface';
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
  categories!: Category[];
  questions!: Question[];

  constructor(private readonly triviaService: TriviaService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  private getCategories(): void {
    this.triviaService.getCategories().subscribe((categories) => {
      this.categories = categories.trivia_categories;
    });
  }

  private getQuestions(params: QuestionParam): void {
    this.triviaService.getQuestions(params).subscribe((questions) => {
      this.questions = questions.results;
    });
  }
}
