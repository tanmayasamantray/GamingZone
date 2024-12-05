import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GamingZone';
  brandUrl: string = 'https://api.logo.com/api/v2/images?logo=lg_LQTW6qeVQ375zeRtO3&format=webp&width=200&background=transparent&fit=contain&quality=100&u=2024-12-05T10%3A16%3A04.000Z'
}
