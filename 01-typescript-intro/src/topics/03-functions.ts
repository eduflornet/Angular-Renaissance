

const addNumbersArrow = (a: number, b:number): string => {
    return `${(a+b)}`;
};

addNumbersArrow(5,6);


interface Character {
    name : string;
    hp: number;
    showHp: () => void;
};

const healCharacter = (character: Character, amount:number) => {

    character.hp += amount;
};

const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log('Puntos de vida');
    }
        
    }

    healCharacter( strider, 10);
    healCharacter( strider, 50);



export {};