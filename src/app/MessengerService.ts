import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Observable} from 'rxjs';

@Injectable()
export class MessengerService {
  private messageSource: BehaviorSubject<string> = new BehaviorSubject('initialValue');
  public message = this.messageSource.asObservable();
  public setMessage(value: any) {
    this.messageSource.next(value);
  }
}
