import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/core/interfaces/category.interface';
import { Question } from 'src/app/core/interfaces/question.interface';
import { TriviaService } from 'src/app/services/trivia.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  categories$!: Observable<Category[]>;
  questions$!: Observable<Question[]>;

  constructor(private readonly triviaService: TriviaService) {}

  ngOnInit(): void {
    this.categories$ = this.triviaService.getCategories();
    // this.questions$ = this.triviaService.getQuestions()
  }
}
