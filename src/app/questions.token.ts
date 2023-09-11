import { InjectionToken } from "@angular/core";
import { Question } from "src/app/models/question";

export const QUESTIONS_TOKEN = new InjectionToken<Question[]>('questions')