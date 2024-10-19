let pizzaToppings = ["Pepperoni", "Cheese", "Bacon", "Mushroom"];
let pizzaPlace = "Gabby's Pizza";

function greetCustomer(toppingsArr) {
  console.log(`Welcome to   ${pizzaPlace}!`);
  for (let topping of toppingsArr) {
    console.log("We offer " + topping);
  }
}

greetCustomer(pizzaToppings);

function getPizzaOrder(size, crust, indenfiniteAmountOfToppings) {
  console.log(size);
  console.log(crust);
  console.log(indenfiniteAmountOfToppings);

  const order = [size, crust, indenfiniteAmountOfToppings];
  return order;
}
let pizzaOrder = getPizzaOrder("medium", "thick", "lotsofToppings");
console.log(pizzaOrder);

function preparePizza([size, crust, toppings]) {
  console.log(`Cooking pizza with ${size} ${crust} ${toppings}`);

  const pizza = {
    size: size,
    crust: crust,
    toppings: toppings
  };
  return pizza;
}

let pizza = preparePizza(pizzaOrder);
console.log(pizza);

function servePizza(pizza) {
  console.log(
    `Order up! Here is your ${pizza.size} ${pizza.crust} pizza with ${pizza.toppings}. Enjoy!`
  );
}
servePizza(pizza);
