import { Component } from '@angular/core';
import { TestObservableComponent } from '../../rxjs/test-observable/test-observable.component';
import { NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-mini-word',
    templateUrl: './mini-word.component.html',
    styleUrls: ['./mini-word.component.css'],
    imports: [TestObservableComponent, NgStyle, FormsModule]
})
export class MiniWordComponent {
  color = 'red';
  size = 75;
  font = 'garamond';
}
