import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-translation',
  standalone: true,
  imports: [],
  templateUrl: './add-translation.component.html',
  styleUrl: './add-translation.component.scss'
})
export class AddTranslationComponent {
  translation: FormGroup;
  constructor(private fb: FormBuilder) { 
    this.translation=fb.group({})
    this.translation.addControl('translationKey', new FormControl('',Validators.required))
    console.log(this.translation.value);
    
  }
}
