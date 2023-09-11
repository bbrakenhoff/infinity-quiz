import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { QxDayScenarios } from 'src/app/models/qx-day-scenarios';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { RandomQuestionService } from './services/random-question.service';
import { QUESTIONS_TOKEN } from './questions.token';
import { StartQuizComponent } from './start-quiz/start-quiz.component';
import { NgConfettiModule } from 'ng-confetti';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { QuizService } from './services/quiz.service';

@NgModule({
  declarations: [AppComponent, StartQuizComponent, QuestionComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgConfettiModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [
    { provide: QUESTIONS_TOKEN, useValue: QxDayScenarios },
    QuizService,
    RandomQuestionService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
