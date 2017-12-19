import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'formbuilder-example',
  templateUrl: './formbuilder-example.component.html',
  styleUrls: ['./formbuilder-example.component.css']
})

// 範例介紹使用 FormBuilder

export class FormbuilderExampleComponent {
  // form
  form;

  // FromBuilder 做法
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ['', Validators.required],
      contact: fb.group({
        detail: ['', Validators.required]
      }),
      topics: fb.array([])
    });
  }

  // Reactive Form 原來做法
  // form = new FormGroup({
  //   name: new FormControl('', Validators.required),
  //   contact: new FormGroup({
  //     detail: new FormControl('', Validators.required)
  //   }),
  //   topics: new FormArray([])
  // });

  // 取得一般欄位
  get name() {
    return this.form.get('name');
  }

  // 取得巢狀欄位
  get detail() {
    return this.form.get('contact.detail');
  }

  // 取得FromArray欄位
  get topics() {
    return this.form.get('topics') as FormArray;
  }

  // 新增array項目
  addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value));
    topic.value = '';
  }
}
