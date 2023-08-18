import { MatChipListbox } from "@angular/material/chips";

export interface QuestionParam {
  amount: number;
  category: number;
  difficulty: string;
  type: string;
}

export interface QuestionResponse {
  response_code: number;
  results: Question[];
}

export interface Question {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  user_answer?: string;
}

export interface ChipAnswers {
  source: MatChipListbox,
  value: string
}

export interface UserAnswer {
  question: string
  question_id: number
  user_answer: string
  correct_answer: string
}

export type QuizMode = 'quiz' | 'results'