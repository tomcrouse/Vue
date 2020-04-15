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

const dep = new Dep();
let price = 5;
let quantity = 2;
let total = 0;

const multiply = () => {
    total = price * quantity
};

const sum = () => {
    total = price + quantity
}

const watcher = func => {
    let target = func;
    dep.depend();
    target();
    target = 0;
}

watcher(multiply);
console.log(total)


watcher(sum);
console.log(total)





// console.log(dep.subscribers)
// console.log(total)

// dep.depend();
// console.log(dep.subscribers)
// console.log(total)

// dep.notify();
// console.log(dep.subscribers)
// console.log(total)