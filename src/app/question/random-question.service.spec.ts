import { TestBed } from '@angular/core/testing';

import { RandomQuestionService } from './random-question.service';
import { Question } from 'src/models/question';
import { QUESTIONS_TOKEN } from '../questions.token';

describe('RandomQuestionService', () => {
  let service: RandomQuestionService;

  const testQuestions: Question[] = [
    {
      title: 'Which song by Ed Sheeran mentions the city of Barcelona?',
      description:
        'Choose the song by Ed Sheeran that mentions the city of Barcelona.',
      options: ['Shape of You', 'Castle on the Hill', 'Barcelona', 'Perfect'],
      correctOptionIndex: 2,
      explanation:
        "Ed Sheeran's song 'Barcelona' mentions the city in its title and lyrics.",
    },
    {
      title: "Which album by Taylor Swift includes the song 'Blank Space'?",
      description:
        "Select the album by Taylor Swift that features the song 'Blank Space'.",
      options: ['Speak Now', '1989', 'Reputation', 'Lover'],
      correctOptionIndex: 1,
      explanation:
        "The song 'Blank Space' is from Taylor Swift's '1989' album.",
    },
    {
      title: 'Which animal is known as the King of the Jungle?',
      description: 'Choose the correct animal from the options below.',
      options: ['Lion', 'Elephant', 'Tiger', 'Cheetah'],
      correctOptionIndex: 0,
      explanation: "Lions are often referred to as the 'King of the Jungle'.",
    },
    {
      title: 'Which planet is known as the Red Planet?',
      description: 'Choose the correct planet from the options below.',
      options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
      correctOptionIndex: 1,
      explanation:
        "Mars is often referred to as the 'Red Planet' because of its reddish appearance.",
    },
    {
      title: 'Which flower is traditionally associated with love and romance?',
      description:
        "Choose the flower that is often given on romantic occasions like Valentine's Day.",
      options: ['Daisy', 'Tulip', 'Rose', 'Sunflower'],
      correctOptionIndex: 2,
      explanation:
        "Roses, especially red ones, are traditionally associated with love and romance and are often given on Valentine's Day.",
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: QUESTIONS_TOKEN, useValue: testQuestions }],
    });
    service = TestBed.inject(RandomQuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('nextQuestion()', () => {
    it('should return a question from the list', () => {
      const result = service.nextQuestion();
      expect(testQuestions).toContain(result);
    });

    it('should not return the same question consecutively until all are chosen', () => {
      const results = new Set<Question>();
      for (let i = 0; i < testQuestions.length; i++) {
        results.add(service.nextQuestion());
      }

      expect(results.size).toEqual(testQuestions.length);
    });

    it('should reset after all strings have been chosen', () => {
      for (let i = 0; i < testQuestions.length; i++) {
        service.nextQuestion();
      }
      const resultAfterReset = service.nextQuestion();
      expect(testQuestions).toContain(resultAfterReset);
    });
  });
});
