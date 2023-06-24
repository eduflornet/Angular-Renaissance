
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

const ironman = new Person('Edu');

console.log('ironman', ironman);

export { };