import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rform',
  templateUrl: './rform.component.html',
  styleUrls: ['./rform.component.scss']
})
export class RformComponent implements OnInit {
  frm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.frm = this.fb.group({
      name: ['', {
        validators: Validators.required,
        updateOn: 'blur'
      }],
      agreeToS: [true, {
        validators: Validators.requiredTrue,
        updateOn: 'submit'
      }]
    });
  }

  onSubmit() {
    console.log(this.frm);
  }

  onClick() {
    console.log(this.frm);
  }

}
