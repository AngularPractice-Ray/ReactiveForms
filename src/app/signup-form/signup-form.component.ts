import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
/*
  透過 controller 控制
  ReactiveForms 會用 FromGroup, FormControl
 */
export class SignupFormComponent {
  // 建立 Reactive form，由 js 控制
  form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      UsernameValidators.cannotContainSpace
    ], UsernameValidators.shouldBeUnique),
    password: new FormControl('', Validators.required),
    // 巢狀做法
    account: new FormGroup({
      detail: new FormControl('', Validators.required)
    })
  });

  // 取得 username 欄位物件
  get username() {
    return this.form.get('username');
  }

  // 取得巢狀 detail 欄位
  get detail() {
    return this.form.get('account.detail');
  }

  // 登入
  login () {
    // 等待後端的做法
    // let isValid = authService.login(this.form.value);
    // if (!isValid) {

      // 由於 FormGroup, FormControl 繼承自 AbstractControl
      // 裡面有 setErrors 可設置驗證
      this.form.setErrors({
        inValidLogin: true
      });
      // 想要單獨對特定欄位設驗證也可以
      // this.username.setErrors({});
    // }
  }

  log(data) {
    console.log(data);
  }
}
