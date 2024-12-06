import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GamesList } from '../../Interface/games-list';
import { NumstrPipe } from '../../Pipes/numstr.pipe';
import { FreeornotPipe } from '../../Pipes/freeornot.pipe';

@Component({
  selector: 'app-gametile',
  imports: [RouterModule, CommonModule, NumstrPipe, FreeornotPipe],
  templateUrl: './gametile.component.html',
  styleUrl: './gametile.component.css'
})
export class GametileComponent {
  @Input() game!:GamesList;
}
