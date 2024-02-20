import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProgressbarComponent } from './components/progressbar/progressbar.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InicioComponent } from './inicio/inicio.component';


@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [RouterOutlet,ProgressbarComponent,MatButtonModule,MatIconModule,MatToolbarModule,MatMenuModule,NavbarComponent,InicioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ThinKids';
}
