const fruitsveggiAPI = {
    list: [
        { number: 1, name: "Apple", price: 120.00 },
        { number: 2, name: "Anjeer", price: 240.00 },
        { number: 3, name: "Banana", price: 50.00 },
        { number: 4, name: "Oranges", price: 70.00 },
        { number: 5, name: "Strawberries", price: 200.00 },
        { number: 6, name: "Fig", price: 140.00 },
        { number: 7, name: "Mango", price: 600.00 },
        { number: 8, name: "Guava", price: 250.00 },
        { number: 9, name: "Pineapple", price: 260.00 },
        
    ],

    all: function () { return this.list }
}

export default fruitsveggiAPI;
