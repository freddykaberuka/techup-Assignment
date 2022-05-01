const item = [ {name: 'Bike', price:100}, {name: 'TV', price:200}, {name: 'Album', price:10}, {name: 'Book', price:5}, {name: 'Phone', price:500}, {name: 'Computer', price:1000}, ];

// 1
const cheapestItems = item.filter((el) => {
    return el.price <= 5;
});
console.log('Cheap Items: ', cheapestItems);

// 2
const expensiveItems = item.filter((el) => {
    return el.price >= 100;
});
console.log('Expensive items: ', expensiveItems);

// 3
const fullPrice = item.reduce((currentSum, el) => {
    return el.price + currentSum;
}, 0);
console.log(`Full price of all products = `, fullPrice);

const itemRemove = item.filter(el => { return el.price > 10 })
console.log(itemRemove.reduce((currentSum, el) => {
    return el.price + currentSum;
}, 0));