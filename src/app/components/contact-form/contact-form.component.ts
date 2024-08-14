import { Component, OnInit  } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ ReactiveFormsModule, NgIf ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent implements OnInit {

  contactForm!: FormGroup;
  submitted: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      this.submitted = true;
      setTimeout(() => {
        this.submitted = false;
      }, 3000);
      // Add your form submission logic here
      this.contactForm.reset();
    }
  }

}
