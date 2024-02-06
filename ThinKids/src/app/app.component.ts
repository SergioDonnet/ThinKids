import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProgressbarComponent } from './components/progressbar/progressbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ProgressbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ThinKids';
}
