// import functions and grab DOM elements
const cat = document.getElementById("cat");
const catSound = document.getElementById("catSound");
catSound.play();

console.log(cat);
console.log(catSound);


const dog = document.getElementById("dog")
const dogsound = document.getElementById("dogSound")
dogsound.play();

console.log(dog);
console.log(dogsound)

const horse = document.getElementById("horse")
const horsesound = document.getElementById("horseSound")

console.log(horse)
console.log(horsesound)

// initialize global state

// set event listeners 

cat.addEventLister(click,()=>{
  catSound.play()
})

dog.addEventLister(click,()=>{
  dogSound.play()
})

horse.addEventLister(click,()=>{
  horseSound.play()
})
  

// get user input
  // use user input to update state 
  // update DOM to reflect the new state
