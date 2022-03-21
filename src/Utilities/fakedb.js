// use local storage to manage cart data

const addToDb = id =>{
    let shoopingCart ={}
    // get the shooping cart
    const storedCart = localStorage.getItem('shooping-cart')
    if(storedCart){
        shoopingCart = JSON.parse(storedCart)
    }

    //add quantity
    const quantity = shoopingCart[id]
    if(quantity){
        shoopingCart[id] = quantity + 1
    }
    else{
        shoopingCart[id] = 1
    }
    
    localStorage.setItem('shooping-cart',JSON.stringify(shoopingCart))
}
const removeFromDb = id =>{
    const storedCart = localStorage.getItem('shooping-cart')
    if(storedCart){
        const shoopingCart = JSON.parse(storedCart)
        if(id in shoopingCart){
            delete shoopingCart[id]
            localStorage.setItem('shooping-cart',JSON.stringify(shoopingCart))
        }
    }
}


export {addToDb,removeFromDb}