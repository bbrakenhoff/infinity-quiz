import { Component } from '@angular/core';
import { QuizService } from '../services/quiz.service';

@Component({
  selector: 'app-start-quiz',
  templateUrl: './start-quiz.component.html',
  styleUrls: ['./start-quiz.component.scss'],
})
export class StartQuizComponent {
  constructor(quizService: QuizService) {
    quizService.allQuestions().subscribe({
      next: (r) =>
        console.log(
          `%c🍟🍔🍕 start-quiz.component.ts[ln:13] fire! 🔥`,
          'color: deeppink',
          r
        ),
    });
  }
}
