import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
    title = 'my-angular-learning-app';
    count = 0
  
    handleClick(opt: string) {
  
      if (opt == '+') {
        this.count++
      } else {
        if(!this.count)return;
        this.count--
      }
    }
  }
