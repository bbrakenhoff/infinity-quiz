import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Question } from 'src/models/question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent {
  readonly question: Question = {
    title: 'De Code Reviewer',
    description:
      'Een ervaren softwareontwikkelaar bij een groot IT-bedrijf heeft onlangs een belangrijke code review uitgevoerd voor een kritiek project. Deze ontwikkelaar heeft enkele ernstige fouten in de code opgemerkt en heeft constructieve feedback gegeven aan het team.',
    options: [
      'Jan de Vries (55, Man, Blank, Nederlands, Hetero). Jan houdt van zeilen en brengt zijn weekenden vaak door op het water.',
      'Fatima El Amrani (28, Vrouw, Getint, Marokkaans, Hetero, 5 jaar in de IT). Fatima is een fervent lezer en heeft een boekenclub opgericht met enkele van haar vrienden.',
      'Lars Jensen (35, Man, Blank, Deens, Homo, 10 jaar in de IT). Lars is een amateurfotograaf en reist graag om landschappen en stadsgezichten vast te leggen.',
    ],
    correctOptionIndex: 1,
    explanation:
      'Het doel van dit scenario is om vooroordelen over ervaring en afkomst uit te dagen. Veel mensen zouden kunnen aannemen dat een oudere, blanke man met veel ervaring in de IT, zoals Jan, de meest waarschijnlijke kandidaat zou zijn om een belangrijke code review uit te voeren. Door Fatima als het juiste antwoord te kiezen, worden deze vooroordelen uitgedaagd.',
  };

  readonly optionsForm = new FormGroup({
    chosenOption: new FormControl(''),
  });

  constructor() {
    this.optionsForm.valueChanges.subscribe((changes) => {
      console.log(
        `%c🍟🍔🍕 question.component.ts[ln:31]`,
        'color: deeppink',
        changes
      );
    });
  }
}
