import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartQuizComponent } from './start-quiz/start-quiz.component';
import { QuestionComponent } from './question/question.component';

const routes: Routes = [
  {
    path: 'start-quiz',
    pathMatch: 'full',
    component: StartQuizComponent,
  },
  { path: 'quiz', pathMatch: 'full', component: QuestionComponent },
  { path: '', redirectTo: 'start-quiz', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
