export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Edu',
}

const passenger2: Passenger = {
    name: 'Isa',
    children: ['Astro','Luca'],
}

const returnChildrenNumber = ( passenger: Passenger ): number => {

    const howManyChildren = passenger.children?.length || 0;
    //const howManyChildren = passenger.children!.length;

    console.log( passenger.name, howManyChildren);

    return howManyChildren;
}

returnChildrenNumber( passenger1 );
returnChildrenNumber( passenger2 );


export { };