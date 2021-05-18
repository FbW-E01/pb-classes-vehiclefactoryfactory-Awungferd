// Create "factory factory" function that returns a constructor function.

// The factory factory takes in one parameter, "type".

// Each created factory needs to create objects with this given type.

// Each created factory needs to take in three parameters and save them to the created objects:
// - make
// - model
function factoryFactory(type) {
  return function Factory(make, model) {
    this.type = type;
    this.make = make;
    this.model = model;
  };
}
// Use your factory factory to create at least five factories, such as
// - bicycle factory
// - car factory
// - boat factory
// - blimp factory
// - train factory
const Bicycle = factoryFactory("bike");
const Car = factoryFactory("car");
const Boat = factoryFactory("boat");
const Blimp = factoryFactory("blimp");
const Train = factoryFactory("train");

// Lastly, use those factories to create some vehicles.

const cyclingPal = new Bicycle("Zephyr", "Keke");
const car1 = new Car("Honda", "Achilles");
const boat1 = new Boat("yacht", "SpeedoBuzz");
const blimp1 = new Blimp("Zipper", "ManOnFumes");
const train1 = new Train("TGV", "GreatWallScaler");
//=========
// Store all your created vehicles inside one array,

const vehicles = [cyclingPal, car1, boat1, blimp1, train1];

// loop over that array and print out each vehicle.

for (let index = 0; index < vehicles.length; index++) {
    const element = vehicles[index];
console.log(element)
}


// Question: Check the *type* of your factories and of the objects that your factories create - what is the type of a factory and what is the type of a created object? Add your answer as comments into into your solution file.
