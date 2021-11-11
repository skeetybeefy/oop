class Item {

    constructor() {
        this._id = Item.total
        Item.total += 1
    }

    get id() {
        return this._id
    }

    get price() {
        return this._price
    }

    get calories() {
        return this._calories
    }

    static total = 0
}


class Hamburger extends Item{
    constructor(size, stuffing) {
        super()
        this._price = size.price + stuffing.price
        this._calories = size.calories + stuffing.calories
    }

    static SIZE_SMALL = {
        price: 50,
        calories: 20 
    }

    static SIZE_LARGE = {
        price: 100,
        calories: 40
    }

    static STUFFING_CHEESE = {
        price: 10,
        calories: 20   
    }

    static STUFFING_SALAD = {
        price: 20,
        calories: 5
    }

    static STUFFING_FRIES = {
        price: 15,
        calories: 10
    }
}


class Salad extends Item {
    constructor(saladType, weight) {
        super()
        this._saladType = saladType
        this._weight = weight

        this._price = this._saladType.price * this._weight / 100
        this._calories = this._saladType.calories * this._weight / 100
    }

    static CAESAR = {
        price: 100,
        calories: 20
    }

    static OLIVIER = {
        price: 50,
        calories: 80
    }
}


class Drink extends Item {
    constructor(drinkType) {
        super()
        this._price = drinkType.price
        this._calories = drinkType.calories
    }

    static COFFEE = {
        price: 80,
        calories: 20
    }

    static COLA = {
        price: 50,
        calories: 40
    }
}


class Order {
    constructor() {
        this._cart = []
        this._isPaid = false
    }

    addItem(foodItem) {
        if (!this._isPaid) {
            this._cart.push(foodItem)
        }
    }

    removeItem(foodItemId) {
        if (!this._isPaid) {
            this._cart = this._cart.filter(cartItem => foodItemId !== cartItem.id)
        }
    }

    makePayment() {
        this._isPaid = true
    }

    get calories() {
        return this._cart.reduce((acc, foodItem) => {
            acc += foodItem.calories
            return acc
        }, 0)
    }

    get total() {
        return this._cart.reduce((acc, foodItem) => {
            acc += foodItem.price
            return acc
        }, 0)
    }

    get items() {
        return this._cart
    }
}

/* 
Пример создания конкретного бургера 

let hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE)

Пример создания заказа и добавления туда кофе

const order1 = new Order
order1.addItem(new Drink(Drink.COFFEE))

*/


