import { IProduct } from './../model/product';
export const MOCK_PRODUCTS: IProduct[] = [
    {
        image: 'https://publicdomainvectors.org/photos/1307364291.png',
        name: 'Mobile',
        model: 'Model 1',
        brand: 'Samsung',
        price: 200,
        availablity: true,
        rating: '4.4',
        modelno: 'AN-b5'
    },
    {
        image: 'https://publicdomainvectors.org/photos/laptop-computer-5-pdv.jpg',
        name: 'Laptop',
        model: 'Model 2',
        brand: 'Dell',
        price: 300,
        availablity: false,
        rating: '3.2',
        modelno: 'NC-f7'
    }
];
