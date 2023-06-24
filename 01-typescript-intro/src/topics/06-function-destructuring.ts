
interface Product {
    description: string;
    price: number;
};

const phone: Product = {
    description: 'Nokia A1',
    price: 150.0
};

const tablet: Product = {
    description: "Ipad Air",
    price: 250.0
};

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
};

// return tupla type
// function taxCalculation(options: TaxCalculationOptions): [number, number] {
//function taxCalculation({tax, products}: TaxCalculationOptions): [number, number] {
function taxCalculation(options: TaxCalculationOptions): [number, number] {
    const { tax, products } = options;
    let total = 0;

    // options.products.forEach( product => {
    //     total += product.price;
    // });

    products.forEach( ({ price }) => {
        total += price;
    });

    return [total, total + tax];
};

const shoppingCart = [phone, tablet];
const tax = 0.15;

const [ totals, taxTotal ] = taxCalculation({ 
    products: shoppingCart,
    tax: tax,    
});

console.log('total:',totals);
console.log('tax:',taxTotal);



//console.log('Total', result[0]);
//console.table(result);


export { };