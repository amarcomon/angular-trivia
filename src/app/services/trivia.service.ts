import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Categories, Category } from '../core/interfaces/category.interface';
import {
  Question,
  QuestionParam,
  QuestionResponse,
} from '../core/interfaces/question.interface';
import { ENDPOINTS } from '../core/endpoints/endpoints';

@Injectable({
  providedIn: 'root',
})
export class TriviaService {
  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    const url = ENDPOINTS.CATEGORIES;
    return this.http.get<Categories>(url).pipe(
      map((categories) => {
        return categories.trivia_categories;
      })
    );
  }

  getQuestions(params: QuestionParam): Observable<Question[]> {
    const url = ENDPOINTS.QUESTIONS(params);
    return this.http.get<QuestionResponse>(url).pipe(
      map((questions) => {
        const sanitize = JSON.stringify(questions.results)
          .replaceAll('&#039;', '´')
          .replaceAll('&quot;', '´')
          .replaceAll('&amp;', '&')
          .replaceAll('&rsquo;', '´')
          .replaceAll('&euml;', 'ë')
          .replaceAll('&uuml;', 'ü')
          .replaceAll('&ouml;', 'ö')
          .replaceAll('&auml;', 'ä');
        return JSON.parse(sanitize);
      })
    );
  }
}
