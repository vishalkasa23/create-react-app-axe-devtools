const GroceryAPI = {
    groceries: [
        { number: 1, name: "Potato Chips", brand: "Balaji", weight: "100gm", price: 40.00 },
        { number: 2, name: "Cake", brand: "Danish", weight: "500gm", price: 300.00 },
        { number: 3, name: "Dates", brand: "Del Monte", weight: "130gm", price: 175.00 },
        { number: 4, name: "Milk", brand: "Amul", weight: "1000ml", price: 65.00 },
        { number: 5, name: "Moong Dal", brand: "Tata", weight: "1kg", price: 100.00 },
        { number: 6, name: "Tur Dal", brand: "Amazon", weight: "1kg", price: 100.00 },
        { number: 7, name: "Soyabean", brand: "National", weight: "500gm", price: 60.00 },
        { number: 8, name: "Matki", brand: "DMart", weight: "200gm", price: 40.00 },
        { number: 9, name: "Chana Green", brand: "Premium Select", weight: "500gm", price: 44.00 },    
    ],

    all: function () { return this.groceries },

    get: function (id) {
        const isGrocery = p => p.number === id
        return this.groceries.find(isGrocery)
    }

}

export default GroceryAPI;
