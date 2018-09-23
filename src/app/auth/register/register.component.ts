import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private fb: FormBuilder) {

  }

  getCaptcha(e: MouseEvent) {
    e.preventDefault();
  }

  /**
   * 提交表单
   */
  submitForm() {
    const data = this.registerForm.value;
    console.log(data);
  }

  /**
   * 密码输入时，检查确认密码的状态
   */
  updateConfirmValidator() {
    Promise.resolve().then(() => this.registerForm.controls.checkPassword.updateValueAndValidity());
  }

  /**
   * 验证确定密码
   * @param control
   */
  confirmationValidator = (control: FormControl): {[s: string]: boolean} => {
    if (!control.value) {
      return {require: true};
    } else if (control.value !== this.registerForm.controls.password.value) {
      return {confirm: true, error: true};
    }
  }

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: ['', [Validators.email]],
      password: ['', [Validators.required]],
      checkPassword: ['', [Validators.required, this.confirmationValidator]],
      nickname: ['', [Validators.required]],
      captcha: ['', [Validators.required]],
      agree: [false, [Validators.requiredTrue]]
    });
  }

}
