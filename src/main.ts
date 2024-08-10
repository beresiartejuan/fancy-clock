import 'normalize.css';
import './style.css';
import { setUpClock } from './clock';
import { setUpTimer } from './timer';

setUpClock(document.getElementById("clock") as HTMLSpanElement);

setUpTimer(document.getElementById("timer") as HTMLSpanElement, {
    start: document.getElementById("start") as HTMLButtonElement,
    stop: document.getElementById("stop") as HTMLButtonElement
});