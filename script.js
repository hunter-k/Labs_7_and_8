var onions = {name: "onions", price: 1.49};
var cookies = {name: "cookies", price: 2.99};
var cucumburs = {name: "cucumburs", price: 1.49};
var cornedBeef = {name: "corned beef", price: 14.99};
var potatoChips = {name: "potato chips", price: 2.49};
var pickles = {name: "pickles", price: 3.99};

// create array using push method
var list = [];
list.push(onions,cookies,cucumburs,cornedBeef,potatoChips,pickles);

// intialize total variable
var total = 0;

// loop through list array printing name and price and adding to total
list.forEach(function (i) {
  console.log(i['name'] + " cost $" + i['price']);
  total += i['price'];
});

// add tax to total
total = total * 1.06;
// round to 2 decimal places
total = total.toFixed(2);

console.log('Your total is $' + total)
