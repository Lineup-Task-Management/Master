import {Component, OnInit, OnDestroy } from '@angular/core';
import {timer, Subscription } from 'rxjs';

@Component( {
selector: 'app-task-timer',
templateUrl: './task-timer.component.html',
styleUrls: ['./task-timer.component.scss']
})
export class TaskTimerComponent {

constructor() {}

 // ngOnInit(): void {}

const timerView = document.querySelector('.timeRemaining');

const timerStopTime = document.querySelector('.timerStopTime');

function timeRemaining(sec) {
  clearInterval(countdownTimer);
  const currentTime = Date.now();
  const stopTime = currentTime + sec * 1000;
  showRemainder(sec);
  let countdownTimer: number;
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
  const min: number;
  min = Math.floor(sec / 60);
  const secLeft =  (sec % 60);
  const showTime = `${min}:${secLeft < 10 ? '0' : '' }${secLeft}`;
  // document.field = showTime;

  timerView.textContent = showTime;

}
showStopTime(stopTime);

function showStopTime(timeRef){
  let hr: number;
  let min: number;
  const timerDone = new Date(timeRef);
  min = timerDone.getMinutes();
  hr = timerDone.getHours();
  const remainderHr = hr > 12 ? hr - 12 : hr;
  timesUp.textContent = `Timer will run out at: ${remainderHr}: ${min < 10 ? '0' : '' }${min}`;

  function timerOn(){
  const sec = parseInt(this.dataset.time);
  timeRemaining(sec);
}
  document.formField.addEventListener('submit', function(event){
  event.preventDefault();
  const minute = this.min.num;
  timeRemaining(min * 60);
  this.reset();

}


)};

