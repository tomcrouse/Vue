const data = {
    price: 2,
    quantity: 10,
};
let total, target, salePrice;

class Dep {
    constructor() {
        this.subscribers = [];
    }
    depend() {
        if (target && !this.subscribers.includes(target)) {
            this.subscribers.push(target);
        }
    }
    notify() {
        this.subscribers.forEach(sub => sub());
    }
}

console.log(data)

Object.keys(data).forEach(key => {

    let internalValue = data[key];
    const dep = new Dep();

    Object.defineProperty(data, key, {
        get() {
            // console.log(`getting value ${internalValue}`)
            dep.depend()
            return internalValue
        },
        set(neWal) {
            internalValue = neWal;
            dep.notify();
            // console.log(`setting value ${internalValue}`)
        }
    })
})

const watcher = func => {
    target = func;
    target();
    target = null;
}
console.log(data)
console.log(total)

watcher(() => {
    total = data.price * data.quantity;
})
watcher(() => {
    salePrice = data.price * 1.1;
})

// console.log(total);
// console.log(salePrice);

data.price = 100;
// console.log(total);