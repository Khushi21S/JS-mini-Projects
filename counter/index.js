// --Reset counter

// Reset it to the start value and restart.



const heading = document.getElementById("heading");
const text = document.getElementById("text");

let id;

function counter(from, to, stepSize, delay, wrapper) {
  id = setInterval(() => {
    if (from < to) {
      from = Math.min(from + stepSize, to);
    } else if (from > to) {
      from = Math.max(from - stepSize, to);

    } else {
      clearInterval(id);
    }
    wrapper.innerText = from;
  }, delay);
}











































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
