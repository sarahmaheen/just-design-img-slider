//Access the image
let slideImages = document.querySelectorAll('img');


//Access the next and prev buttons
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');


//Access the indicators 
let dots = document.querySelectorAll('.dot')

var counter = 0;

//code for the next button
next.addEventListener('click', slideNext);
function slideNext(){
    slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
    if(counter >= slideImages.length-1){
        counter = 0
    }else{
        counter++;
    }
    slideImages[counter].style.animation = 'next2 0.5s ease-in forwards'
}


//code for prev buttons
prev.addEventListener('click', slidePrev);
function slidePrev(){
    slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
    if(counter == 0){
        counter = slideImages.length-1;
    }else{
        counter--;
    }
    slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards'
    indicators()
}


//Auto play sliding 
function autoSliding(){
    deletInterval = setInterval(timer,1000);

    function timer(){
       slideNext() 
       indicators()
    }
}
autoSliding()

//stop auto sliding when mouse over 

const container = document.querySelector('.slide-container');
container.addEventListener('mouseover',function(){
    clearInterval(deletInterval)
})

// resume sliding when mouse is out 
container.addEventListener('mouseout',autoSliding)


// add and remove class from the indicator 
function indicators(){
    for(i = 0;i<dots.length;i++){
        dots[i].className = dots[i].className.replace(' active', '');

    }
    dots[counter].className += ' active'
}

// Add click event to the indicator 

function switchImage(currentImage){
    currentImage.classList.add('active');
    var imageId = currentImage.getAttribute('attr');
    if(imageId > counter){
       slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
       counter = imageId;
       slideImages[counter].style.animation = 'next2 0.5s ease-in forwards' 
    } else if(imageId == counter){
        return;
    }else{
        slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
       counter = imageId;
       slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards' 
    }
}