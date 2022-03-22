const add = (first , second) =>{
    return first + second;
}


const multiply = (first,second) =>{
    return first * second;
}
// const numbers = [23,20,45,96,38]
// const sumReducer = (previous,current) => previous + current;
// const total = numbers.reduce(sumReducer,0)

// const items = [
//     {id: 1, name: 'alta', price: 48},
//     {id: 2, name: 'alta', price: 38},
//     {id: 3, name: 'alta', price: 68},
//     {id: 4, name: 'alta', price: 28}
// ]
// const itemSumReducer = (previous,current) => previous + current.price
// const itemTotal = items.reduce(itemSumReducer,0)

const getTotalPrice = products =>{
    const reducer = (previous,current) => previous + current.price
    const total = products.reduce(reducer,0)
    return total
}

export {
    add,
    multiply,
    getTotalPrice as getTotal
}