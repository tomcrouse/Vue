const data = {
    price: 2,
    quantity: 10,
};


Object.keys(data).forEach(key => {
    let internalValue = data[key];
    Object.defineProperty(data, key, {
        get() {
            console.log(`getting value ${internalValue}`)
            return internalValue
        },
        set(neWal) {
            internalValue = neWal;
            console.log(`setting value ${internalValue}`)
        }
    })
})


data.price;
data.price = 20;

data.quantity
data.quantity = 100;