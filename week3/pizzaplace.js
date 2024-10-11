// const pizzaToppings = ["Pepperoni", "Cheese", "Bacon", "Mushroom"];
// let pizzaPlace = "Gabby's Pizza";
// for (let i = 0; i < pizzaToppings.length; i++) {
//   console.log(pizzaToppings[i]);
//   const pizzaPlace = "Gabby's Pizza";
//   console.log(
//     `"Welcome to " ` + [pizzaPlace]`"Where we have "`[pizzaToppings][i]
//   );
// }

let pizzaToppings = ["Pepperoni", "Cheese", "Bacon", "Mushroom"];
// for (let topping of pizzaToppings) {
//   console.log("We offer " + topping);
// }
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

// let yumPizza = ["pepperoni", "cheese", "bacon"];
// function servePizza(orderArr) {
//   for (let eatPizza of orderArr) {
//     console.log(
//       `Order up! Here's your large thick crust pizza with ${yumPizza}. Enjoy!`
//     );
//   }
// }
// servePizza(yumPizza);
let yumPizza = ["pepperoni", "cheese", "bacon"];
function servePizza() {
  for (let key in yumPizza) {
    console.log(
      `Order up! Here's your large thick crust pizza with yumPizza.${key} = ${yumPizza[key]}`
    );
  }
}
servePizza();

function returnFunction() {
  return preparePizza;
}
returnFunction();

function returnFunction2() {
  return servePizza();
}
returnFunction2();
