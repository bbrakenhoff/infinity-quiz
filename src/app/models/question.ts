import {
  DocumentData,
  FirestoreDataConverter,
  PartialWithFieldValue,
  QueryDocumentSnapshot,
  SetOptions,
  SnapshotOptions,
  WithFieldValue,
} from 'firebase/firestore';

export interface Question {
  title: string;
  description: string;
  options: string[];
  correctOptionIndex: number;
  explanation: string;
}

export class QuestionFirebaseConverter
  implements FirestoreDataConverter<Question>
{
  toFirestore(modelObject: WithFieldValue<Question>): DocumentData;
  toFirestore(
    modelObject: PartialWithFieldValue<Question>,
    options: SetOptions
  ): DocumentData;
  toFirestore(
    modelObject: unknown,
    options?: unknown
  ): import('@firebase/firestore').DocumentData {
    throw new Error('Method not implemented.');
  }
  fromFirestore(
    snapshot: QueryDocumentSnapshot<DocumentData>,
    options?: SnapshotOptions | undefined
  ): Question {
    const data = snapshot.data(options);
    return {
      title: snapshot.id,
      description: data['description'],
      options: data['options'],
      correctOptionIndex: data['correctOptionIndex'],
      explanation: '',
    };
  }
}
