import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
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
