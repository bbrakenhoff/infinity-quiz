import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { QxDayScenarios } from 'src/models/qx-day-scenarios';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { RandomQuestionService } from './question/random-question.service';
import { QUESTIONS_TOKEN } from './questions.token';
import { StartQuizComponent } from './start-quiz/start-quiz.component';

@NgModule({
  declarations: [AppComponent, StartQuizComponent, QuestionComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    { provide: QUESTIONS_TOKEN, useValue: QxDayScenarios },
    RandomQuestionService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
