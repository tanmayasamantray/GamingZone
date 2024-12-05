import { Component, inject } from '@angular/core';
import { GamesList } from '../../Interface/games-list';
import { GamingService } from '../../Services/gaming.service';
import { CommonModule } from '@angular/common';
import { GametileComponent } from '../gametile/gametile.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [CommonModule, RouterModule, GametileComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  gameList: GamesList[] = [];
  gamingService: GamingService = inject(GamingService);

  constructor(){
    this.gameList = this.gamingService.getAllGames();
  }
}
