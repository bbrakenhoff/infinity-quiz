import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { NgConfettiModule } from 'ng-confetti';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { QuestionLoadingService } from './services/question-loading.service';
import { RandomQuestionService } from './services/random-question.service';
import { StartQuizComponent } from './start-quiz/start-quiz.component';

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
    QuestionLoadingService,
    {
      provide: APP_INITIALIZER,
      useFactory: (quizService: QuestionLoadingService) => () =>
        quizService.loadAllQuestions(),
      deps: [QuestionLoadingService],
      multi: true,
    },
    RandomQuestionService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
