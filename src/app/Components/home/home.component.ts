import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  imgUrl: string = "https://img.freepik.com/free-vector/wizard-with-magic-spear-walk-hanging-rope-bridge-abyss-mountains_107791-5102.jpg?t=st=1733383001~exp=1733386601~hmac=ce07e744500db7e4c5ba04c2aad7f084a32368ac0c10ced76306c47a29469bd6&w=1000"
}
