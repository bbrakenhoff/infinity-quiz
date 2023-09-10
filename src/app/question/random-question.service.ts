import { Inject, Injectable } from '@angular/core';
import { Question } from 'src/models/question';
import { QxDayScenarios } from 'src/models/qx-day-scenarios';
import { QUESTIONS_TOKEN } from '../questions.token';

@Injectable({
  providedIn: 'root',
})
export class RandomQuestionService {
  private remainingQuestions: Question[] = [];

  constructor(
    @Inject(QUESTIONS_TOKEN)
    private readonly allQuestions: Question[] = QxDayScenarios
  ) {}

  nextQuestion(): Question {
    this.resetRemainingQuestions();
    const nextQuestionIndex = this.nextQuestionIndex();

    const nextQuestion = this.remainingQuestions[nextQuestionIndex];
    this.remainingQuestions.splice(nextQuestionIndex, 1);

    return nextQuestion;
  }

  private resetRemainingQuestions(): void {
    if (this.remainingQuestions.length === 0) {
      this.remainingQuestions = [
        ...this.allQuestions.filter((q) => q.correctOptionIndex === 0),
      ];
    }
  }

  private nextQuestionIndex(): number {
    return Math.floor(Math.random() * this.remainingQuestions.length);
  }
}
