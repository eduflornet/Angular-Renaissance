import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

console.log(uuid());
@Injectable({
  providedIn: 'root' // this becomes to singleton to all app
})
export class DbzService {

  public characters: Character[] = [
    {  id: uuid(),
      name:'Krillin', power: 1000},
    { id: uuid(),
      name:'Goku', power:9500}
  ];

  onDeleteCharacter(index: number): void {
    console.log('Service');
    console.log('index ', index);
    // Use splice() to remove arbitrary item
    this.characters.slice(index, 1);
  }

  deleteCharacterById(id:string) {
    this.characters = this.characters.filter( character => character.id !== id );
  }

  addCharacter( character :Character): void {
    // add element at the end of the array
    debugger;
    const newCharacter: Character = {
      id: uuid(),
        ...character
      };

    this.characters.push(character);
    console.log('Service');
    console.log('onNewCharacter', character);

  }

  constructor() { }
}
