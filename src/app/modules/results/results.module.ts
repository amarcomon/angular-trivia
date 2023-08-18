import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsComponent } from './results.component';
import { ResultsRoutingModule } from './results-routing.module';
import { QuestionaireModule } from '../questionaire/questionaire.module';

@NgModule({
  declarations: [ResultsComponent],
  imports: [CommonModule, ResultsRoutingModule, QuestionaireModule],
  exports: [ResultsComponent]
})
export class ResultsModule {}
