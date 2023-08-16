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
  incorrect_answer: string[];
}
