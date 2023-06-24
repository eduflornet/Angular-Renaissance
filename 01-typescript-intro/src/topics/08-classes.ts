
export class Person { 
    // public name?: string;
    // private address?: string;
    
    constructor( 
        public name? : string , 
        public address: string = 'No Address'){
        this.name = name;
        this.address = address;
    }
};



export class Hero extends Person {
    constructor( 
        public aterEgo: string,
        public age: number,
        public realName: string
    ){
    super()
    }
};

const ironman = new Hero('IronMan',20,'Edu');
ironman.name = 'Lalo';
ironman.address= 'Madrid';

console.log('ironman', ironman);

export { };