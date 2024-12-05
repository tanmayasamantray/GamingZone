import { Injectable } from '@angular/core';
import { GamesList } from '../Interface/games-list';

@Injectable({
  providedIn: 'root'
})
export class GamingService {

  protected gameList: GamesList[] = [
      {
        "id": 0,
        "name": "The Legend of Zelda: Breath of the Wild",
        "image": "https://upload.wikimedia.org/wikipedia/en/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg",
        "developedBy": "Nintendo",
        "downloads": 25000000,
        "description": "An open-world adventure game where players explore the kingdom of Hyrule to defeat the evil Calamity Ganon.",
        "detail_image": "https://platform.polygon.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/22665889/Hardmode_1__1_.jpeg?quality=100",
        "likes": 3200000
      },
      {
        "id": 1,
        "name": "Minecraft",
        "image": "https://m.media-amazon.com/images/M/MV5BNjQzMDlkNDctYmE3Yi00ZWFiLTlmOWYtMjI4MzQ4Y2JhZjY2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        "developedBy": "Mojang Studios",
        "downloads": 238000000,
        "description": "A sandbox game where players can build, explore, and survive in a blocky 3D world.",
        "detail_image": "https://pcsite.co.uk/wp-content/uploads/2023/12/minecraft-1.19.jpg",
        "likes": 5000000
      },
      {
        "id": 2,
        "name": "Fortnite",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZWoQF_EWvGqGmMfE5eDd4M5q6yjpdExdWvA&s",
        "developedBy": "Epic Games",
        "downloads": 100000000,
        "description": "A battle royale game where 100 players fight to be the last one standing.",
        "detail_image": "https://hyperpc.ae/images/support/articles/pc-for-fortnite/fortnite-banner_webp.jpg",
        "likes": 4500000
      },
      {
        "id": 3,
        "name": "Genshin Impact",
        "image": "https://cdn1.epicgames.com/offer/879b0d8776ab46a59a129983ba78f0ce/genshintall_1200x1600-4a5697be3925e8cb1f59725a9830cafc",
        "developedBy": "miHoYo",
        "downloads": 60000000,
        "description": "An open-world action RPG with stunning visuals and elemental combat.",
        "detail_image": "https://uhsswordandshield.com/wp-content/uploads/2020/10/Screen-Shot-2020-10-29-at-10.33.46-AM.png",
        "likes": 3400000
      },
      {
        "id": 4,
        "name": "Grand Theft Auto V",
        "image": "https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png",
        "developedBy": "Rockstar Games",
        "downloads": 180000000,
        "description": "An open-world game set in Los Santos, where players engage in missions, heists, and free-roaming exploration.",
        "detail_image": "https://m.media-amazon.com/images/I/61vTNw826OL._AC_UF350,350_QL80_.jpg",
        "likes": 4700000
      },
      {
        "id": 5,
        "name": "Call of Duty: Warzone",
        "image": "https://image.api.playstation.com/vulcan/ap/rnd/202312/0123/978efa66c9645e4692ac7036a31aa002a49d0efb4b88b45c.png",
        "developedBy": "Infinity Ward",
        "downloads": 125000000,
        "description": "A free-to-play battle royale game with realistic combat and team-based gameplay.",
        "detail_image": "https://www.techspot.com/images2/news/bigimage/2020/11/2020-11-02-image-19.jpg",
        "likes": 4100000
      },
      {
        "id": 6,
        "name": "Among Us",
        "image": "https://oyster.ignimgs.com/mediawiki/apis.ign.com/among-us/e/ef/1f9249103f371671071532e02e3ab39d2da49cbe.png",
        "developedBy": "Innersloth",
        "downloads": 500000000,
        "description": "A multiplayer social deduction game where players work to complete tasks while identifying impostors.",
        "detail_image": "https://i.ytimg.com/vi/PsxRxSWXPIs/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCj031dfLSlThMasUJSeSy41Vj7Qw",
        "likes": 3000000
      },
      {
        "id": 7,
        "name": "Hollow Knight",
        "image": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1030300/capsule_616x353.jpg?t=1695443850",
        "developedBy": "Team Cherry",
        "downloads": 3000000,
        "description": "A 2D action-adventure game with a dark and mysterious atmosphere.",
        "detail_image": "https://indieoverlook.com/wp-content/uploads/2017/03/Hollow-Knight-Lake-1024x576.jpg",
        "likes": 2200000
      }
    ]
    getAllGames(): GamesList[]{
      return this.gameList;
    }
    getGamesbyId(id: number): GamesList | undefined{
      return this.gameList.find(gameList => gameList.id === id);
    }
  constructor() { }
}
