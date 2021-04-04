import {students} from './students.js'

import {displayStudentList} from './studentList.js'

const classTimerInSec = 5*60;
const studentTimerInSec = 30;

const studentTimerWrapper = document.querySelector(".student-timer-wrapper")
const startbutton = document.createElement("button");
startbutton.innerHTML="START"
startbutton.classList.add("start-button");
studentTimerWrapper.append(startbutton);
const studentTimer = document.querySelector("#student-timer");
studentTimer.remove();
startbutton.addEventListener("click", ()=>{
    startbutton.remove();
    studentTimerWrapper.append(studentTimer);
    startTimer(classTimerInSec, document.querySelector("#time"));
    startTimer(studentTimerInSec, document.querySelector("#student-timer"))
})
    
const studentList = displayStudentList(students)
document.querySelector(".classList").append(studentList);

let studentButtons = studentList.childNodes;

studentButtons[0].classList.add("selected")

const startTimer = function(duration, element){
    
    let timer = duration, minutes, seconds;
    let refreshInterval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        if(minutes>0){
            element.innerText = minutes + ":" + seconds;
        }
        else
        {
            element.innerText = seconds;
        }

        if (--timer < 0) {
            timer = duration;
        }
        if(seconds == 0 && minutes == 0){
            document.querySelector(".question").innerText = "GAME OVER";
            clearInterval(refreshInterval);
        }
    }, 1000);


}
