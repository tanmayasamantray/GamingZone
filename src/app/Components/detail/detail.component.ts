import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamingService } from '../../Services/gaming.service';
import { GamesList } from '../../Interface/games-list';

@Component({
  selector: 'app-detail',
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  gamingService = inject(GamingService);
  gameList: GamesList | undefined;

  constructor(){
    const gameId = Number(this.route.snapshot.params['id']);
    this.gameList = this.gamingService.getGamesbyId(gameId)
  }
}