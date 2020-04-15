let price = 5;
let quantity = 10;
let total = price * quantity;
console.log(`total is ${total}`);

price = 6;
console.log(`total is ${total}`);

const storage = [];
const target = () => {
    total = price * quantity
};
const record = () => {
    storage.push(target)
};
const replay = () => {
    storage.forEach(run => run())
};

record();
replay();
console.log(`total is ${total}`);

price = 10;
replay();
console.log(`total is ${total}`);