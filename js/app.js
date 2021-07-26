'use strict';

let leftImageElement = document.getElementById('left-image');
let rightImageElement = document.getElementById('right-image');
let centerImageElement = document.getElementById('center-image');

let buttonElement=document.getElementById('button');



console.log(leftImageElement, rightImageElement, centerImageElement);

let MaxAttempts = 25;
let AttemptsCounter = 0;

let leftImageIndex;
let rightImageIndex;
let centerImageIndex;


// array for all the products
let products = [];

// pascal case
function Product(name, src) {
    this.name = name;
    this.source = src;
    this.vote = 0;
    this.shown = 0;
    products.push(this);

}


// instances 
new Product('bag', 'images/bag.jpg'); //0
new Product('banana', 'images/banana.jpg'); //1
new Product('bathroom', 'images/bathroom.jpg'); //2
new Product('boots', 'images/boots.jpg'); //3
new Product('breakfast', 'images/breakfast.jpg'); //4
new Product('bubblegum', 'images/bubblegum.jpg'); //5
new Product('chair', 'images/chair.jpg'); //6
new Product('cthulhu', 'images/cthulhu.jpg'); //7
new Product('dog-duck', 'images/dog-duck.jpg'); //8
new Product('dragon', 'images/dragon.jpg'); //9
new Product('pen', 'images/pen.jpg'); //10
new Product('pet-sweep', 'images/pet-sweep.jpg'); //11
new Product('scissors', 'images/scissors.jpg'); //12
new Product('shark', 'images/shark.jpg'); //13
new Product('sweep', 'images/sweep.png'); //14
new Product('tauntaun', 'images/tauntaun.jpg'); //15
new Product('unicorn', 'images/unicorn.jpg'); //16
new Product('water-can', 'images/water-can.jpg'); //17
new Product('wine-glass', 'images/wine-glass.jpg'); //18

// console.log(products);


// to generate a random index in the products array that refers to a method (image)
// from w3 schools
function getRandomIndex() {
    // 0=>18
    return Math.floor(Math.random() * (products.length));
}

//   console.log(getRandomIndex());z

// render
function renderThreeImages() {
    leftImageIndex = getRandomIndex();
    rightImageIndex = getRandomIndex();
    centerImageIndex = getRandomIndex();



    // console.log(leftImageElement);

    // leftImageElement.setAttribute('src',products[leftImageIndex].source);

    while (leftImageIndex === rightImageIndex || leftImageIndex === centerImageIndex || rightImageIndex === centerImageIndex) {
        leftImageIndex = getRandomIndex();
        rightImageIndex = getRandomIndex();
        centerImageIndex = getRandomIndex();
    }

    // console.log(products[rightImageIndex].source);

    // rightImageElement.src = products[rightImageIndex].source;

    // console.log(rightImageElement ,'right element');

    leftImageElement.src = products[leftImageIndex].source;
    rightImageElement.src = products[rightImageIndex].source;
    centerImageElement.src = products[centerImageIndex].source;



    // leftImageElement.setAttribute('src',products[leftImageIndex].source);
    // centerImageElement.setAttribute('src',products[centerImageIndex].source);
    // rightImageElement.setAttribute('src',products[rightImageIndex].source);z

    // console.log(products[rightImageIndex].source, 'value right image');


    products[leftImageIndex].shown++;
    products[rightImageIndex].shown++;
    products[centerImageIndex].shown++;

}

renderThreeImages();



// handle click function:
// let ImagesDiv = document.getElementById('images-div');
// ImagesDiv.addEventListener('click', UserClick);

leftImageElement.addEventListener('click', UserClick);
rightImageElement.addEventListener('click', UserClick);
centerImageElement.addEventListener('click', UserClick);


function UserClick(event) {

    console.log(event.target.id);

    AttemptsCounter++;

    console.log(AttemptsCounter);


    if (AttemptsCounter < MaxAttempts) {


        if (event.target.id === 'left-image') {

            products[leftImageIndex].vote++;
            console.log(products[leftImageIndex]);


        }



        else if (event.target.id === 'right-image') {
            products[rightImageIndex].vote++;
            console.log(products[rightImageIndex]);
        }


        else if (event.target.id === 'center-image') {
            products[centerImageIndex].vote++
            console.log(products[centerImageIndex]);

        }
        else{
            alert('please click on the images');
        }

        renderThreeImages();

    }else{

        buttonElement.addEventListener('click', showList);

    function showList() {
      let list = document.getElementById('results-list');

      for (let i = 0; i < products.length; i++) {
        // const element = goats[i];
        let listItem = document.createElement('li');

        list.appendChild(listItem);
        // banana had 3 votes, and was seen 5 times.

        listItem.textContent = `${products[i].name} has ${products[i].vote} votes, and was seen ${products[i].shown} times`;

      }

      buttonElement.removeEventListener('click', showList);
    }
    }
}









