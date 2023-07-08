
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


// using inheritance
// export class Hero extends Person {
//     constructor( 
//         public aterEgo: string,
//         public age: number,
//         public realName: string
//     ){
//     super()
//     }
// };

// using composition
export class Hero {
    constructor( 
        public aterEgo: string,
        public age: number,
        public realName: string,
        public person: Person
    ){
    
    }
};

const person = new Person('Edu', 'Madrid'); 
// using composition
const ironman = new Hero('IronMan',20,'Lalo',person);
console.log('ironman', ironman);

export { };