import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [ ReactiveFormsModule, NgIf ],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnInit {
  productForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService
  ) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      category: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.productForm.valid) {
      this.productService.addProduct(this.productForm.value).subscribe(
        response => {
          console.log('Product added successfully!', response);
          this.productForm.reset();
        },
        error => {
          console.error('Error adding product', error);
        }
      );
    }
  }

}
