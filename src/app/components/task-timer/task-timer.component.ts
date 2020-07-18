import {Component, OnInit, OnDestroy } from '@angular/core';

@Component( {
selector: 'app-task-timer',
templateUrl: './task-timer.component.html',
styleUrls: ['./task-timer.component.scss']
})
export class TaskTimerComponent {

// constructor() {}

 // ngOnInit(): void {}

let countdownTimer: number;
const timerView = document.querySelector('.timeRemaining');

const timerStopTime = document.querySelector('.timerStopTime');

function taskTimer(sec) {
  clearInterval(countdownTimer);
  const currentTime = Date.now();
  const stopTime = currentTime + sec * 1000;
  showRemainder(sec);
  countdownTimer = setInterval(() => {

    const remainderSec = Math.round((stopTime - (Date.now()) / 1000));

    if (remainderSec < 0){
    clearInterval(countdownTimer);
    return;
  }
    showRemainder(remainderSec);
  }, 1000);

}

function showRemainder(sec){
  let min: number;
  min = Math.floor(sec / 60);
  const secLeft =  (sec % 60);
  const showTime = `${min}:${secLeft < 10 ? '0' : '' }${secLeft}`;
  timerView.textContent = showTime;

}
showStopTime(stopTime);

function showStopTime(timeRef: string | number | Date){
  let hr: number;
  let min: number;
  const timerDone = new Date(timeRef);
  min = timerDone.getMinutes();
  hr = timerDone.getHours();
  const remainderHr = hr > 12 ? hr - 12 : hr;
  timerStopTime.textContent = `Timer will run out at: ${remainderHr}: ${min < 10 ? '0' : '' }${min}`;

  function timerOn(){
  const sec = parseInt(this.dataset.time);
  taskTimer(sec);
}
  document.formField.addEventListener('submit', function(x){
  x.preventDefault();
  const minute = this.min.num;
  taskTimer(min * 60);
  this.reset();

}


)};

