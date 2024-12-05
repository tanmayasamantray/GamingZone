import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GamesList } from '../../Interface/games-list';

@Component({
  selector: 'app-gametile',
  imports: [RouterModule, CommonModule],
  templateUrl: './gametile.component.html',
  styleUrl: './gametile.component.css'
})
export class GametileComponent {
  @Input() game!:GamesList;
}
