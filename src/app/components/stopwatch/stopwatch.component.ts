import {Component, OnInit, OnDestroy } from '@angular/core';

@Component( {
selector: 'app-stopwatch',
templateUrl: './stopwatch.component.html',
styleUrls: ['./stopwatch.component.scss']
})
export class StopwatchComponent implements OnDestroy {
constructor() {}

stopwatch: number;
isOn = false;
secondsOn = 0;
startButton = 'Start';

startStopwatch() {
  this.isOn =  ! this.isOn;
  if (this.isOn){
    this.startButton = 'Stop';
    const timeStarted = Date.now() - (this.secondsOn || 0);

    this.stopwatch = setInterval(() => {
      this.secondsOn ++;
      }, 1000);
    } else {
      this.startButton = 'Continue';
      clearInterval(this.stopwatch);
      }
    }

  resetStopwatch(){
    this.isOn = false;
    this.startButton = 'Start';
    this.secondsOn = 0;
    clearInterval(this.stopwatch);

    }
  ngOnDestroy() {
    clearInterval(this.stopwatch);
    }
}
