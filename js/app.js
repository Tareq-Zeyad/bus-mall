'use strict';

let leftImageElement = document.getElementById('left-image');
let rightImageElement = document.getElementById('right-image');
let centerImageElement = document.getElementById('center-image');

console.log(leftImageElement,rightImageElement,centerImageElement);

let MaxAttempts=10;
let AttemptsCounter=0;

let leftImageIndex;
let rightImageIndex;
let centerImageIndex;


// array for all the products
let products=[];

// pascal case
function Product (name,src) {
    this.name=name;
    this.source=src;
    this.vote=0;
    this.shown=0;
    products.push(this);
    
}

// instances 
new Product ('bag','images/bag.jpg'); //0
new Product ('banana','images/banana.jpg'); //1
new Product ('bathroom','images/bathroom.jpg'); //2
new Product ('boots','images/boots.jpg'); //3
new Product ('breakfast','images/breakfast.jpg'); //4
new Product ('bubblegum','images/bubblegum.jpg'); //5
new Product ('chair','images/chair.jpg'); //6
new Product ('cthulhu','images/cthulhu.jpg'); //7
new Product ('dog-duck','images/dog-duck.jpg'); //8
new Product ('dragon','images/dragon.jpg'); //9
new Product ('pen','images/pen.jpg'); //10
new Product ('pet-sweep','images/pet-sweep.jpg'); //11
new Product ('scissors','images/scissors.jpg'); //12
new Product ('shark','images/shark.jpg'); //13
new Product ('sweep','images/sweep.png'); //14
new Product ('tauntaun','images/tauntaun.jpg'); //15
new Product ('unicorn','images/unicorn.jpg'); //16
new Product ('water-can','images/water-can.jpg'); //17
new Product ('wine-glass','images/wine-glass.jpg'); //18

console.log(products);


// to generate a random index in the products array that refers to a method (image)
// from w3 schools
function getRandomIndex() {
    // 0=>18
    return Math.floor(Math.random() * (products.length) -0);
  }
  
  console.log(getRandomIndex());

// render
function renderThreeImages () {
    leftImageIndex=getRandomIndex();
    rightImageIndex=getRandomIndex();
    centerImageIndex=getRandomIndex();

    

    // console.log(leftImageElement);

    // leftImageElement.setAttribute('src',products[leftImageIndex].source);

    rightImageElement.src=products[rightImageIndex].source;
    console.log(rightImageElement.src ,'right element');

    leftImageElement.src=products[leftImageIndex].source;
    centerImageElement.src=products[centerImageIndex].source;

    console.log(products[rightImageIndex].source, 'value right image');

    while (leftImageIndex===rightImageIndex || leftImageIndex===centerImageIndex ||rightImageIndex===centerImageIndex){
        leftImageIndex=getRandomIndex();
        rightImageIndex=getRandomIndex();
        centerImageIndex=getRandomIndex();
    }

    leftImageElement=products[leftImageIndex].shown++;
    rightImageElement=products[rightImageIndex].shown++;
    centerImageElement=products[centerImageIndex].shown++;

    
}

renderThreeImages();



// handle click function:
let ImagesDiv = document.getElementById('images-div');
ImagesDiv.addEventListener('click',UserClick);


function UserClick(event) {

    console.log(event.target.id);

    AttemptsCounter++;
    console.log(AttemptsCounter);
    

    if (AttemptsCounter < MaxAttempts) {

        if (event.target.id==='left-image'){
            products[leftImageIndex].vote++;
            console.log(products[leftImageIndex]);
        }
    

    
        if(event.target.id==='right-image'){
            products[rightImageIndex].vote++;
            console.log(products[rightImageIndex]);
        }
    

            else{
            products[centerImageIndex].vote++
            console.log(products[centerImageIndex]);

        }
    
    renderThreeImages();

    }



    

}





