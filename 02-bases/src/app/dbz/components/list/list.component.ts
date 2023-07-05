import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [
    {name: 'Trunk', power: 10}
  ]

  // emit index
  @Output()
public onDelete:EventEmitter<number> = new EventEmitter();

  onDeletedCharacter(index:number):void {
    console.log('list-component');
    console.log('index', index);
    // Emit ID of the character
    this.onDelete.emit(index);
    // Use splice() to remove arbitrary item
    this.characterList.splice(index,1);
    
  };

}


