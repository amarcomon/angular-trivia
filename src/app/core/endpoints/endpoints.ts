import { QuestionParam } from '../interfaces/question.interface';

export const ENDPOINTS = {
  CATEGORIES: 'https://opentdb.com/api_category.php',
  QUESTIONS: (params: QuestionParam) =>
    `https://opentdb.com/api.php?amount=${params.amount}&category=${params.category}&difficulty=${params.difficulty}&type${params.type}`,
};
