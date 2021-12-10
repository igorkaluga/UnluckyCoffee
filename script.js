function createCoffee(name, notes, roast, about) {
    const coffee = {
        name:name,
        notes:notes,
        roast:roast,
        about:about
    };
}

console.log(createCoffee("x", "y", "z", "ss"));

let blackCatCoffee = {
    name: 'Black Cat',
    notes: 'Cherry, Chocolate',
    roast: 'Dark',
    about: 'This is the original Unlucky Cat roast. Inspired by my own black cat that I found on the side of the street as a kitten and ended up adopting.'
};

let knockOnWood = {
    name: 'Knock On Wood',
    notes: 'Honey, Woody',
    roast: 'Medium',
    about: 'Knock on wood roast means to bring good luck. This roast is meant to do just that! With the sweet notes of honey and undertones of wood you are sure to be lucky!'
};

let coffeeArray = [blackCatCoffee, knockOnWood];

let boxDiv = document.getElementById('box-div');

for (let i = 0; i < coffeeArray.length; i++) {
    //makes product listing div, adds a class
    let productListingDiv = document.createElement('div');
    productListingDiv.classList.add('product-listing');
    //makes product listing text
    let productText = document.createElement('div');
    productText.classList.add('product-listing-text');
    // adds another div to center all of the text
    let productTextInner = document.createElement('div');
    //pulls the name
    let productName = document.createElement('h2');
    let coffeeName = document.createTextNode(coffeeArray[i].name);
    productName.appendChild(coffeeName); // appends pulled name to productName variable
    //pulls the notes
    let productNotes = document.createElement('p');
    productNotes.innerHTML = "Notes: ";
    let coffeeNotes = document.createTextNode(coffeeArray[i].notes);
    productNotes.appendChild(coffeeNotes);


    //Appends all declarations above to html sheet
    boxDiv.appendChild(productListingDiv);
    productListingDiv.appendChild(productText);
    productText.appendChild(productTextInner);
    //Appends text to innerText
    productTextInner.appendChild(productName);
    productTextInner.appendChild(productNotes);
}