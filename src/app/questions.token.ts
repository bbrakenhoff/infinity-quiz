import { InjectionToken } from "@angular/core";
import { Question } from "src/models/question";

export const QUESTIONS_TOKEN = new InjectionToken<Question[]>('questions')