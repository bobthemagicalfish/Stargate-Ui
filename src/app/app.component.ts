import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AstronautListComponent } from './astronaut-list/astronaut-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AstronautListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Stargate-Ui';
}
