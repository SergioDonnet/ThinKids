import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProgressbarComponent } from './components/progressbar/progressbar.component';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ProgressbarComponent,MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ThinKids';
}
