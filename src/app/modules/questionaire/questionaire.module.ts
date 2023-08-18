import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionaireComponent } from './questionaire.component';
import { MatChipsModule } from '@angular/material/chips';
import { QuestionComponent } from './components/question/question.component';

@NgModule({
  declarations: [QuestionaireComponent, QuestionComponent],
  imports: [CommonModule, MatChipsModule],
  exports: [QuestionaireComponent, QuestionComponent],
})
export class QuestionaireModule {}
