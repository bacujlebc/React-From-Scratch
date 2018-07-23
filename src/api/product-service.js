import { products } from '../data/product-json';

export const fetchProducts = _ => {
    return new Promise( (resolve, reject) => {
        resolve(products);
        // reject("Something went wrong.")
    })
}