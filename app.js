// import functions and grab DOM elements
const cat = document.getElementById("cat");
const catSound = document.getElementById("catSound");
catSound.play();

console.log(cat);
console.log(catSound);


const dog = document.getElementById("dog")
const dogSound = document.getElementById("dogSound")
dogSound.play();

console.log(dog);
console.log(dogSound)

const horse = document.getElementById("horse")
const horseSound = document.getElementById("horseSound")

console.log(horse)
console.log(horseSound)

// initialize global state

// set event listeners 

cat.addEventListener('click', () => {
  catSound.play ();
  clickedOnEl.textContent = 'cat';

});

dog.addEventListener('click',()=>{
  dogSound.play();

  clickedOnEl.textContent = 'dog';
});

horse.addEventListener('click',()=>{
  horseSound.play();
  clickedOnEl.textContent = 'horse';
});
  

// get user input
  // use user input to update state 

  // update DOM to reflect the new state
