import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { formModel } from '../../interfaces/formModel';

@Component({
  selector: 'app-add-translation',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './add-translation.component.html',
  styleUrl: './add-translation.component.scss'
})
export class AddTranslationComponent {
  translation: FormGroup;
  translationFormKeys: formModel[] = [
    {
      title: 'translation key',
      inputData: { key: 'translationKey', inputType: 'text' }
    },
    {
      title: 'ar',
      inputData: { key: 'ar', inputType: 'text' }
    },
    {
      title: 'en',
      inputData: { key: 'en', inputType: 'text' }
    },
  ]
  constructor(private fb: FormBuilder) {
    this.translation = fb.group({})
    this.translationFormKeys.forEach(element => {
      this.translation.addControl(element.inputData.key, new FormControl('', Validators.required))
    });
  }
}
