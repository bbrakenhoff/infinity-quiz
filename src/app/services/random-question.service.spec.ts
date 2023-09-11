import { TestBed } from '@angular/core/testing';

import { Question } from 'src/app/models/question';
import { QuestionLoadingService } from './question-loading.service';
import { RandomQuestionService } from './random-question.service';

describe('RandomQuestionService', () => {
  let service: RandomQuestionService;

  const mockQuestions: Question[] = [
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
      providers: [
        {
          provide: QuestionLoadingService,
          useValue: {
            allQuestions: mockQuestions,
          },
        },
      ],
    });
    service = TestBed.inject(RandomQuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getNextQuestion()', () => {
    it('should return a random question', () => {
      const nextQuestion = service.getNextQuestion();
      expect(mockQuestions).toContain(nextQuestion);
    });

    it('should eventually exhaust all questions and reset', () => {
      for (let i = 0; i < mockQuestions.length; i++) {
       service.getNextQuestion();
      }

      // At this point, the questions queue should be empty
      expect((service as any).questionsQueue.length).toBe(0);

      // Calling getNextQuestion again should refill the queue
      const mostRecentQuestion: Question = service.getNextQuestion();
      expect((service as any).questionsQueue.length).toEqual(
        mockQuestions.length - 2
      );

      // The most recent question should be excluded so it will not be immediately repeated
      expect((service as any).questionsQueue).not.toContain(
        mostRecentQuestion!
      );
    });

    it('should re-add the most recent question when getNextQuestion is called for the second time after a reset', () => {
      for (let i = 0; i < mockQuestions.length; i++) {
        service.getNextQuestion();
      }

      // Calling getNextQuestion again should refill the queue
      service.getNextQuestion();

      // The most recent question should have been re-added
      service.getNextQuestion();

      expect((service as any).questionsQueue.length).toEqual(
        mockQuestions.length - 2
      );
    });
  });
});
