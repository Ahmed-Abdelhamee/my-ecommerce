import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { addTranslation } from '../../interfaces/form.add-trasnlation';

@Component({
  selector: 'app-add-translation',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './add-translation.component.html',
  styleUrl: './add-translation.component.scss'
})
export class AddTranslationComponent {
  translation: FormGroup;
  translationForm: addTranslation[] = [
    { key: 'translationKey' },
    { key: 'ar' },
    { key: 'en' },
  ]
  constructor(private fb: FormBuilder) {
    this.translation = fb.group({})
    this.translationForm.forEach(element => {
      this.translation.addControl(element.key, new FormControl('', Validators.required))
    });
  }
}
