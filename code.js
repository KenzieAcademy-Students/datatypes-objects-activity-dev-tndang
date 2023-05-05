/*
---------------------------------------------------------------------------
Objects - Part One
*/

// Do not modify this object here.
let person = {
  firstName: "Homer",
  lastName: "Simpson",
  hobbies: ["Television", "Eating Donuts", "Playing with his Kids"],
  address: {
    number: 742,
    street: "Evergreen Terrace",
    city: "Springfield",
    state: "Illinois",
    zipcode: "12345",
  },
  "favorite color": "yellow",
};

/*
Using the function below, print the person to the page according 
to the instructions on my.kenzie
*/

const renderPerson = function(person) {
  // Your Code Here
  let divElement = document.createElement("div");
  let h2Element = document.createElement("h2");
  let h4Element1 = document.createElement("h4");
  let h4Element2 = document.createElement("h4");
  let h4Element3 = document.createElement("h4");
  let ulElement = document.createElement("ul");
  let pElement1 = document.createElement("p");
  let pElement2 = document.createElement("p");
  let firstName = person.firstName;
  let lastName = person.lastName;
  let hobbies = person.hobbies;
  let address = person.address;
  let favoriteColor = person["favorite color"];

  document.body.append(divElement);

  divElement.append(h2Element);
  divElement.className = "card";
  h2Element.innerText = `${firstName} ${lastName}`;

  divElement.append(h4Element1);
  h4Element1.innerText = `Hobbies`;
  divElement.append(ulElement);
  for (let index = 0; index < hobbies.length; index++) {
    let liElement = document.createElement("li");

    ulElement.append(liElement);
    liElement.innerText = `${hobbies[index]}`;
  }

  divElement.append(h4Element2);
  h4Element2.innerText = `Shipping Address`;
  divElement.append(pElement1);
  pElement1.innerText = `${firstName} ${lastName} \n ${address.number} ${address.street} \n ${address.city}, ${address.state} ${address.zipcode}`;

  divElement.append(h4Element3);
  h4Element3.innerText = `Favorite Color`;
  divElement.append(pElement2);
  pElement2.innerText = `${favoriteColor}`
}

renderPerson(person);

/*
---------------------------------------------------------------------------
Part Two

Create a new person.  

Your object should look very similar to the Person object above!
But you should use different values.  Put whatever you want for the values.

Call renderPerson() and pass your new person object in as an argument to 
render your person to the page.
*/

// Your Code Here
let myExamplePerson = {
  firstName: "Rimuru",
  lastName: "Tempest",
  hobbies: ["Relaxing on Shion's Lap", "Drinking Tea", "Exploring"],
  address: {
    number: 1,
    street: "Rimuru's House",
    city: "Jura",
    state: "Tempest Federation",
    zipcode: "15000",
  },
  "favorite color": "Blue",
};

renderPerson(myExamplePerson);

/*
---------------------------------------------------------------------------
Part Three

Modify the person object to change them to bart.  
Follow the instruction on my.kenzie
*/

const changePersonToBart = function(person) {
  // Your Code Here


}

// Then, call the function with the argument examplePerson
// Assign the result to a new variable.  Then call renderPerson with the 
// new variable

/*
---------------------------------------------------------------------------
Part Four (Optional Practice)

Create your own object!
*/

// Your Code Here




