import { Injectable } from '@angular/core';
import { Question } from 'src/app/models/question';
import { QuestionLoadingService } from './question-loading.service';

@Injectable({
  providedIn: 'root',
})
export class RandomQuestionService {
  private readonly allQuestions = this.questionLoadingService.allQuestions;
  private questionsQueue = [...this.allQuestions];

  private mostRecentQuestion: Question | null = null;
  private shouldReAddMostRecentQuestion = false;

  public constructor(
    private readonly questionLoadingService: QuestionLoadingService
  ) {}

  getNextQuestion(): Question {
    this.resetQuestionsQueue();

    const nextQuestionIndex = this.getNextQuestionIndex();
    this.mostRecentQuestion = this.questionsQueue.splice(
      nextQuestionIndex,
      1
    )[0];

    console.log(
      `🍟🍔🍕  random-question.service.ts[ln:28] splice`,
      this.questionsQueue.length
    );

    return this.mostRecentQuestion;
  }

  private resetQuestionsQueue(): void {
    if (this.questionsQueueIsEmpty()) {
      this.refillQuestionsQueue();
    } else if (this.shouldReAddMostRecentQuestion) {
      this.questionsQueue.push(this.mostRecentQuestion!);
      this.shouldReAddMostRecentQuestion = false;
    }
  }

  private refillQuestionsQueue() {
    this.shouldReAddMostRecentQuestion = true;
    this.questionsQueue = this.allQuestions.filter(
      (question) => question !== this.mostRecentQuestion
    );

    console.log(
      `🍟🍔🍕  random-question.service.ts[ln:46] length refilled`,
      this.questionsQueue.length
    );
  }

  private questionsQueueIsEmpty() {
    return this.questionsQueue.length === 0;
  }

  private getNextQuestionIndex(): number {
    return Math.floor(Math.random() * this.questionsQueue.length);
  }
}
