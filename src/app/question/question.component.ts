import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Question } from 'src/models/question';
import { RandomQuestionService } from './random-question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent {
  currentQuestion: Question = this.randomQuestionService.nextQuestion();

  chosenOptionIndex: number | null = null;

  constructor(private readonly randomQuestionService: RandomQuestionService) {}

  onOptionSelected(): void {
    this.currentQuestion = this.randomQuestionService.nextQuestion();
    this.chosenOptionIndex = null;
  }
}
