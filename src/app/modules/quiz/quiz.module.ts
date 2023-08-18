import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizRoutingModule } from './quiz-routing.module';
import { QuizComponent } from './quiz.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { QuestionaireModule } from '../questionaire/questionaire.module';

@NgModule({
  declarations: [QuizComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    QuizRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    QuestionaireModule,
  ],
  exports: [QuizComponent],
})
export class QuizModule {}
