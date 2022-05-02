const items = [ {name: 'Bike', price:100}, {name: 'TV', price:200}, {name: 'Album', price:10}, {name: 'Book', price:5}, {name: 'Phone', price:500}, {name: 'Computer', price:1000}, ];

// 1 Filter and show the product that will be bought when you don't have much money I mean Cheap one
// i assume that the price of the product is less than 6$.
const cheapestItems = items.filter((item) => item.price <= 5);
console.log('Cheap Items: ', cheapestItems);

// 2 Filter and show the product that will be expensive in the array
// i assume that the price of the product is more than 100$.to become exprensive
const expensiveItems = items.filter((item) => item.price >= 100);
console.log('Expensive items: ', expensiveItems);

// 3 Calculate the full price of all product combined
const fullPrice = items.reduce((currentSum, item) => item.price + currentSum, 0);
console.log(`Full price of all products = `, fullPrice);

// 4 Calculate the full price of all product combined and remove product that are under the 10 dollar
const itemRemove = items.filter(item => item.price > 10);
console.log(`Full price of all products - products under 10$ = `,itemRemove.reduce((currentSum, item) =>  item.price + currentSum, 0));