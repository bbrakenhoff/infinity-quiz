import { Component } from '@angular/core';
import { Question } from 'src/app/models/question';
import { RandomQuestionService } from '../services/random-question.service';
import {
  emojiConfettiOptions,
  normalConfettiOptions,
} from './confetti-options';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent {
  public currentQuestion: Question =
    this.randomQuestionService.getNextQuestion();

  public chosenOptionIndex: number | null = null;
  public chosenOptionCorrect: null | boolean = null;

  public readonly confettiOptions = {
    emoji: emojiConfettiOptions,
    normal: normalConfettiOptions,
  };

  constructor(private readonly randomQuestionService: RandomQuestionService) {}

  public onOptionSelected() {
    this.chosenOptionCorrect = true;
    this.chosenOptionIndex !== null &&
      this.chosenOptionIndex - 1 === this.currentQuestion.correctOptionIndex;
  }

  public nextQuestion(): void {
    this.currentQuestion = this.randomQuestionService.getNextQuestion();
    this.chosenOptionIndex = null;
    this.chosenOptionCorrect = null;
  }
}
