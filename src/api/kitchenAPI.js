const kitchenAPI = {
    appliances: [
        { number: 1, name: "Mixer", brand: "Philips", price: 7990.00 },
        { number: 2, name: "Induction Cooktop", brand: "Kent", price: 2350.00 },
        { number: 3, name: "Hand Blender", brand: "Pigeon", price: 10500.00 },
        { number: 4, name: "Egg Boiler", brand: "Kent", price: 1100.00 },
        { number: 5, name: "Rice Cooker", brand: "Bajaj", price: 1600.00 },
        { number: 6, name: "Gas Stove", brand: "Prestige", price: 9400.00 },
        { number: 7, name: "Refrigerator", brand: "LG", price: 24500.00 },
        { number: 8, name: "Oven", brand: "Borosil", price: 9050.00 },
        { number: 9, name: "Chopping Board", brand: "Victorinox", price: 900.00 },
  
    ],

    all: function () { return this.appliances }
}

export default kitchenAPI;
