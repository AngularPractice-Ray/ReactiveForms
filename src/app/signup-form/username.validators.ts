import { AbstractControl, ValidationErrors } from '@angular/forms';

// 客製 Validation
export class UsernameValidators {

  // 加上 static 就可讓外面叫用這個方法不需 new UsernameValidators

  // 同步：在前端做即時互動的客製驗證
  static cannotContainSpace (control: AbstractControl): ValidationErrors | null {
    // tslint:disable-next-line:curly
    if ((control.value as string).indexOf(' ') >= 0)
      return { cannotContainSpace: true};

    return null;
  }

  // 非同步：等待後端傳遞訊息的客製驗證
  static shouldBeUnique (control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        // tslint:disable-next-line:curly
        if (control.value == 'Ray')
          resolve({ shouldBeUnique: true });
        // tslint:disable-next-line:curly
        else
          resolve(null);
      }, 2000);
    });
  }
}
