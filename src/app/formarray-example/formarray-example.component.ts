import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'formarray-example',
  templateUrl: './formarray-example.component.html',
  styleUrls: ['./formarray-example.component.css']
})

export class FormarrayExampleComponent {
  form = new FormGroup({
    // FormArray 第一個引數裝 FormControl 陣列
    topics: new FormArray([])
  });

  // 新增 topic
  addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value));
    // 清空 input 值
    topic.value = '';
    console.log(this.topics);
  }

  // 刪除 topic
  removeTopic(topic: FormControl) {
    let index: number = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

  // 取得 topics
  get topics() {
    // this.form.get('topics') 型別為 AbstractControl (介面)
    return this.form.get('topics') as FormArray;
  }
}
