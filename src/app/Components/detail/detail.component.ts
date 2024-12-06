import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamingService } from '../../Services/gaming.service';
import { GamesList } from '../../Interface/games-list';
import { CommonModule } from '@angular/common';
import { IMAGE_CONFIG } from '@angular/common';
import { FreeornotPipe } from '../../Pipes/freeornot.pipe';
import { NumstrPipe } from '../../Pipes/numstr.pipe';

@Component({
  selector: 'app-detail',
  imports: [CommonModule, FreeornotPipe, NumstrPipe],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css',
  providers: [
    {
      provide: IMAGE_CONFIG,
      useValue: {
        disableImageSizeWarning: true, 
        disableImageLazyLoadWarning: true
      }
    },
  ]
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
