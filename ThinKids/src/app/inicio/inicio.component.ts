import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { ProgressbarComponent } from '../components/progressbar/progressbar.component';


@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterOutlet,ProgressbarComponent,MatButtonModule,MatIconModule,MatToolbarModule,MatMenuModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
