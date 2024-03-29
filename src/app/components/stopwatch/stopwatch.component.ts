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
secondsOn = 30000;
showSeconds: string;
startButton = 'Stop';

startStopwatch() {
  this.isOn = this.isOn;
  if (this.isOn){
    this.startButton = 'Stop';
    setInterval(() => {
      this.secondsOn ++;
      this.showSeconds = new Date(this.secondsOn * 1000).toISOString().substr(11, 8);
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

    }
}
