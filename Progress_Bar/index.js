const progressBar = document.getElementById("progressBar");



//totalTime = 3s

let progress = 0;

let totalTime = 3000;

//if the total width of the progress bar is 100 and we have
//increment it by 1% each time, then how in how much time 
//will it be incremented by 1%, it will be the step time.

let stepTime = totalTime/100; //increment by 1%

// as we know 100 % ---> 3s
// 1% ---> 3s/100 

function incrementProgress(){

    const intervalId = setInterval(() => {
        progress++;
        progressBar.style.width = progress + "%";

        if(progress > 100){
            clearInterval(intervalId);
        }
    }, stepTime);
    
}


incrementProgress();