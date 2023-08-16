import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categories } from '../core/interfaces/category.interface';
import {
  QuestionParam,
  QuestionResponse,
} from '../core/interfaces/question.interface';

@Injectable({
  providedIn: 'root',
})
export class TriviaService {
  constructor(private http: HttpClient) {}

  getCategories(): Observable<Categories> {
    const url = 'https://opentdb.com/api_category.php';
    return this.http.get<Categories>(url);
  }

  getQuestions(params: QuestionParam): Observable<QuestionResponse> {
    const url = `https://opentdb.com/api.php?amount=${params.amount}&category=${params.category}&difficulty=${params.difficulty}&type${params.type}`;
    return this.http.get<QuestionResponse>(url);
  }
}
