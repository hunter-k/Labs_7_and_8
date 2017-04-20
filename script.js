var onions = {name: "onions", price: 1.49};
var cookies = {name: "cookies", price: 2.99};
var cucumburs = {name: "cucumburs", price: 1.49};
var cornedBeef = {name: "corned beef", price: 14.99};
var potatoChips = {name: "potato chips", price: 2.49};
var mayo = {name: "mayo", price: 4.49};
var cheese = {name: "cheese", price: 6.99};
var dogFood = {name: "dog food", price: 29.99};
var beer = {name: "beer", price: 7.99};
var pickles = {name: "pickles", price: 2.49}

// create array using push method
var list = [];
list.push(onions,cookies,cucumburs,cornedBeef,potatoChips,mayo,cheese,dogFood,beer,pickles);

// create new container that is a div where we will put our grocery list
var container = document.createElement('div');
container.className = 'li';
container.id ="listInDiv";
document.getElementById('shoppingList').appendChild(container);

// function that populates that list
function populate () {
  for (var i = 0; i < list.length ; i++) {
    var newLine = document.createElement('li');
    newLine.innerText = list[i].name + " cost $" + list[i].price;
    container.appendChild(newLine);
  }
}

// initial call
populate();

// create object from form inputs and adds to li
function addItem () {
  var item = document.getElementById("item").value;
  var priceOf = Number (document.getElementById("price").value);
  var newObj = {name: item, price: priceOf};
  list.push(newObj);
  var newLine = document.createElement('li');
  newLine.innerText = newObj.name + " costs $" + newObj.price;
  container.appendChild(newLine);
  // recalculate total
  addTotal();
}

// delete last item from li on button click
function deletePrev () {
  var listArr = document.getElementById("listInDiv");
  var last = list.length - 1;
  listArr.removeChild(listArr.childNodes[last]);
  // remove last item from list array
  list.pop();
  // recalculate total
  addTotal();
}

// adds total to end of page
function addTotal () {
  var total = 0;
  list.forEach(function (i) {
    total += i['price'];
  });
  // add tax to total
  total = total * 1.06;
  // round to 2 decimal places
  total = total.toFixed(2);

  var totalDisplay = document.getElementById("total");
  totalDisplay.innerText = "Your total is $" + total;
}

// initial call
addTotal();
