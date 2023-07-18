import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrls: ['./card-player.component.css']
})
export class CardPlayerComponent {
  @Input() mode: 'small' | 'big' = 'small'
  @Input() track: any = { _id: 0, name: '', album: '', url: '', cover: '' };
}
