import { Injectable } from '@angular/core';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { CollectionReference, collection, getDocs } from 'firebase/firestore';
import { FirestoreDataConverter } from 'firebase/firestore/lite';
import { Question, QuestionFirebaseConverter } from '../models/question';
import { Subject, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  constructor(private readonly firestore: Firestore) {}

  allQuestions() {
    const subject = new Subject<Question[]>();

    getDocs(
      collection(this.firestore, 'questions', 'qxday/scenarios').withConverter(
        new QuestionFirebaseConverter()
      )
    )
      .then((result) => subject.next(result.docs.map((doc) => doc.data())))
      .catch((error) => subject.error(error));

    return subject;
  }
}
