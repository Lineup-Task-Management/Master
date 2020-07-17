import {Component, OnInit, OnDestroy, Pipe, PipeTransform } from '@angular/core';
import {timer, Subscription } from 'rxjs';

@Component( {
selector: 'app-task-timer',
templateUrl: './task-timer.component.html',
styleUrls: ['./task-timer.component.scss']
})
export class TaskTimerComponent implements OnInit {

constructor() {}

ngOnInit(): void {

// tslint:disable-next-line: prefer-const
let countdownTimer: number;

const timerView = document.querySelector('.timeRemaining');
const timerStopTime = document.querySelector('.timerStopTime');






}

}
