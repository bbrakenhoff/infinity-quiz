import { Component } from '@angular/core';
import { Question } from 'src/app/models/question';
import { RandomQuestionService } from '../services/random-question.service';
import { confetti, ConfettiOptions } from 'tsparticles-confetti';
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
  currentQuestion: Question = this.randomQuestionService.nextQuestion();

  chosenOptionIndex: number | null = null;
  chosenOptionCorrect: null | boolean = null;

  readonly confettiOptions = {
    emoji: emojiConfettiOptions,
    normal: normalConfettiOptions,
  };

  constructor(private readonly randomQuestionService: RandomQuestionService) {}

  onOptionSelected() {
    this.chosenOptionCorrect =
      this.chosenOptionIndex !== null &&
      this.chosenOptionIndex - 1 === this.currentQuestion.correctOptionIndex;
  }

  nextQuestion(): void {
    this.currentQuestion = this.randomQuestionService.nextQuestion();
    this.chosenOptionIndex = null;
    this.chosenOptionCorrect = null;
  }
}
