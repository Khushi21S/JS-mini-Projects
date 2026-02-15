const inputBox = document.querySelector("input");

function debounce(fn, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {

      fn();
    }, delay);
  };
}
//function to debounce

let countApiCall = 0;
function getData() {
  console.log("Data Fetched", countApiCall++);
}

const debouncedFn = debounce(getData, 2000);

inputBox.addEventListener("input", debouncedFn);
