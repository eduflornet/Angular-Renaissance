// modules
//funcionalidad encapsulada
import { Product, taxCalculation } from './06-function-destructuring';

const shoppingCart: Product[] = [
    { 
        description: 'Nokia',
        price: 100
    },
    {
        description: 'iPad',
        price: 150
    }
]; 


const [total, taxTotal] = taxCalculation({
    tax: 0.15,
    products: shoppingCart
});

console.log('total', total);
console.log('taxTotal', taxTotal);

export { };