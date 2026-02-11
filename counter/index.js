// --Non-linear counting

// Slow at start, fast at the end — learn about simple math in JS.


const heading = document.getElementById("heading");
const text = document.getElementById("text");
const resetButton = document.getElementById("reset");
const startButton = document.getElementById("start");



function showCount(currValue){
  heading.innerText = currValue
}

function display(buttonState){
  startButton.innerText = buttonState
}

function increment(stepSize, initialValue, finalValue, from, speedFactor){
  const distanceCovered = Math.abs(from - initialValue);
  const totalDistance = Math.abs(finalValue - initialValue);
  if(distanceCovered == 0) return 0;
  let progress = distanceCovered/totalDistance;
  
  let step = stepSize + (progress * speedFactor);
  return Math.ceil(step);
}




function counter(initialValue, finalValue, stepSize, delay, showCount, increment, speedFactor){
  let id = null
  let from = initialValue;
  let isRunning = false;
  let step = stepSize;

  function start(){
    if(isRunning) return;
    isRunning = true;
    id = setInterval(() => {
      if(from < finalValue){
        from = Math.min(from + step, finalValue)

      } else if( from > finalValue){
        from = Math.max(from - step, finalValue)
      } else{
        clearInterval(id);
        id = null
        isRunning = false
      }
      showCount(from);
      step = increment(stepSize, initialValue, finalValue, from, speedFactor);
      
    }, delay)
    
  }

  function reset(){
    isRunning = false;
    from = initialValue;
    clearInterval(id);
    id = null;
    showCount(from);
  }

  function pause(){
    isRunning = false;
    clearInterval(id);
    id = null;
  }
  function getRunningState(){
    return isRunning;
  }

  return {start, reset, pause, getRunningState}
}



const count = counter(1000, 0, 10, 100, showCount, increment, 10);


function startPauseCounter(){
 let runningState =count.getRunningState()
  if(runningState){
    count.pause();
    display("Start")
  } else{
    count.start();
    display("Pause")
  }
}

function resetCounter(){
  count.reset();
  display("Start");
}



startButton.addEventListener("click", startPauseCounter);

resetButton.addEventListener("click", resetCounter);
































// --Reset counter

// Reset it to the start value and restart.





// function showCount(currValue){
//   heading.innerText = currValue
// }

// function display(buttonState){
//   startButton.innerText = buttonState
// }



// function counter(initialValue, finalValue, stepSize, delay, showCount){
//   let id = null
//   let from = initialValue;
//   let isRunning = false;

//   function start(){
//     if(isRunning) return;
//     isRunning = true;
//     id = setInterval(() => {
//       if(from < finalValue){
//         from = Math.min(from + stepSize, finalValue);
//       } else if( from > finalValue){
//         from = Math.max(from - stepSize, finalValue)
//       } else{
//         clearInterval(id);
//         id = null
//         isRunning = false
//       }
//       showCount(from)
//     }, delay)
    
//   }

//   function reset(){
//     isRunning = false;
//     from = initialValue;
//     clearInterval(id);
//     id = null;
//     showCount(from);
//   }

//   function pause(){
//     isRunning = false;
//     clearInterval(id);
//     id = null;
//   }
//   function getRunningState(){
//     return isRunning;
//   }

//   return {start, reset, pause, getRunningState}
// }



// const count = counter(0, 1000, 10, 100, showCount, display);


// function startPauseCounter(){
//  let runningState =count.getRunningState()
//   if(runningState){
//     count.pause();
//     display("Start")
//   } else{
//     count.start();
//     display("Pause")
//   }
// }

// function resetCounter(){
//   count.reset();
//   display("Start");
// }





// startButton.addEventListener("click", startPauseCounter);

// resetButton.addEventListener("click", resetCounter);































// let id;

// let from = 0;
// const initialValue = from;

// heading.innerText = from;

// function showCount(currValue){
//   heading.innerText = currValue
// }

// function counter(to, stepSize, delay, showCount) {
//   id = setInterval(() => {
//     if (from < to) {
//       from = Math.min(from + stepSize, to);
//     } else if (from > to) {
//       from = Math.max(from - stepSize, to);
//     } else {
//       clearInterval(id);
//       id = null;
//       startButton.style.display = "none"
//     }
//     showCount(from);
//   }, delay);
// }






// function onReset() {
//   clearInterval(id);
//   id = null;

//   from = initialValue;
//   heading.innerText = from;

//   startButton.style.display = "block"
//   startButton.innerText = "Start"
// }

// function onStart() {
//   if (id != null) {
//     clearInterval(id)
//     id = null;
//     startButton.innerText = "Start";
//     //here we want start counter from where the from was stopped
//   } else {
//     //start counter from initially
//     counter(1000, 2, 10, showCount)
//     startButton.innerText = "Pause";
//   }
// }

// resetButton.addEventListener("click", onReset);
// startButton.addEventListener("click", onStart);

// --Trigger a callback

// Example: when counter finishes, call your changeText() automatically.

// const heading = document.getElementById("heading");
// const text = document.getElementById("text");

// let id;

// function counter(from, to, stepSize, delay, wrapper, changeText) {
//   id = setInterval(() => {
//     if (from < to) {
//       from = Math.min(from + stepSize, to);
//     } else if (from > to) {
//       from = Math.max(from - stepSize, to);

//     } else {
//          changeText()
//       clearInterval(id);
//     }
//     wrapper.innerText = from;
//   }, delay);
// }

// function changeText(){
//     text.innerText = "Followers on Instagram";
// }

// counter(0, 1000, 2, 10, heading, changeText);

// --Highlight milestones

// Example: every 100 counts, make the number bold or change color.

// const colors = ["yellow", "blue", "orange", "green", "pink"];

// let lastIndex = -1

// function changeColor(value1, value2, colors, wrapper) {
//   const percentage = (value1 / value2) * 100;
//   const length = colors.length;
//   if (length == 1) {
//     wrapper.style.color = colors[0];
//     return;
//   }
//   const stepLimit = 100 / (length);
//   const index = Math.min(Math.floor(percentage / stepLimit), length - 1);

//   if(index !== lastIndex){
//     wrapper.style.color = colors[index];
//     lastIndex = index;
//   }
// }

// --Change text dynamically while counting

// Example: if count < 500 → “Getting started”, if count >= 500 → “Halfway there”.

// const heading = document.getElementById("heading");
// const text = document.getElementById("text");

// text.innerText = "Getting started";

// let id;

// const statements = [
//   "Just started",
//   "Going on",
//   "Almost Halway",
//   "Wait a bit more",
//   "Reached",
// ];

// function counter(from, to, stepSize, delay, wrapper) {
//     const startValue = from;
//   id = setInterval(() => {
//     if (from < to) {
//       from = Math.min(from + stepSize, to);
//       showText(from, to, statements)
//     } else if (from > to) {
//       from = Math.max(from - stepSize, to);
//       showText(startValue - from, startValue, statements)
//     } else {
//       clearInterval(id);
//     }
//     wrapper.innerText = from;
//   }, delay);
// }

// counter(500, 0, 3, 50, heading);

// function showText(value1, value2, statements) {
//   const percentage = (value1/value2) * 100
//   const length = statements.length;
//   if(length == 1) {
//     text.innerText = statements[0];
//     return;
//   }
//   const stepSize = 100/(length - 1);
//   text.innerText = statements[(Math.floor(percentage/(stepSize)))]

// }

//   if (percentage <= 25) text.innerText = statements[0];
//   else if (25 < percentage && percentage <=50) text.innerText = statements[1];
//   else if (50 < percentage && percentage <=75) text.innerText = statements[2];
//   else if (75 < percentage && percentage <=98) text.innerText = statements[3];
//   else text.innerText = statements[4]

// const countWrapper = document.getElementsByTagName("h1");
// const textWrapper = document.getElementsByTagName("h3");

//show in the countWrapper no.s from 0 --> 1000

// let count = 0;

// function counter() {
//   const id = setInterval(() => {
//     if (count < 1000) {
//       count++;
//       countWrapper[0].innerText = count;
//     } else {
//       clearInterval(id);
//     }
//   }, 1);
// }

// function changeText() {
//   setTimeout(() => {
//     textWrapper[0].innerText = "Followers on Instagram";
//   }, 4000);

// }

//Make it count from 50 → 500 instead of 0 → 1000,

// function counter(from, to, stepSize, delay) {
//   const id = setInterval(() => {
//     if (from < to) {
//       from = Math.min(from + stepSize, to);
//     } else if (from > to) {
//       from = Math.max(from - stepSize, to);
//     } else {
//       clearInterval(id);
//     }
//     countWrapper[0].innerText = from;
//   }, delay);
// }

//--Multiple counters
//Add two <h1> elements and run counters on both at the same time.

//button logic with pause and resume

// const outerBody = document.getElementById("body");

// const wrapper = document.createElement("div");
// const button = document.createElement("button");
// button.innerText = "Pause";

// const heading = document.createElement("h1");
// wrapper.appendChild(heading);
// wrapper.appendChild(button);

// outerBody.appendChild(wrapper);

// let id;

// let isPause = false;

// function counter(from, to, stepSize, delay, wrapper) {
//   id = setInterval(() => {
//     if (from < to) {
//       isPause ? from : (from = Math.min(from + stepSize, to));
//     } else if (from > to) {
//       isPause ? from : (from = Math.max(from - stepSize, to));
//     } else {
//       clearInterval(id);
//       button.innerText = "Success";
//     }
//     wrapper.innerText = from;
//   }, delay);
// }

// function onButtonClick() {
//   if (isPause == true) {
//     isPause = false;
//     button.innerText = "Pause";
//   } else {
//     isPause = true;
//     button.innerText = "Resume";
//   }
// }
// button.addEventListener("click", onButtonClick);
// counter(0, 1000, 2, 10, heading);
