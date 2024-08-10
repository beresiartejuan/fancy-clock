import { format } from "./utils"

interface TimerControllers {
    stop: HTMLButtonElement,
    start: HTMLButtonElement
}

export const setUpTimer = (timer: HTMLSpanElement, controllers: TimerControllers) => {

    let intervalId: number | null = null;

    let isStarted = false;

    let seconds = 0;
    let minutes = 0;
    let hours = 0;

    const changeClock = () => {

        if (seconds >= 60) {
            minutes++;
            seconds = 0;
        }

        if (minutes >= 60) {
            hours++;
            minutes = 0;
        }

        timer.innerText = `${format(hours)}:${format(minutes)}:${format(seconds)}`;

        if (isStarted) seconds++;
    }


    controllers.start.addEventListener("click", () => {
        if (isStarted) return;

        isStarted = true;
        intervalId = window.setInterval(changeClock, 1000);
        controllers.stop.innerText = "Stop";
    });

    controllers.stop.addEventListener("click", () => {
        if (!isStarted) {
            seconds = minutes = hours = 0;
            changeClock();
            controllers.stop.innerText = "Stop";
        }

        if (isStarted && intervalId) {
            isStarted = false;
            clearInterval(intervalId);
            controllers.stop.innerText = "Resume";
        }
    });

    window.addEventListener("beforeunload", () => {
        if (intervalId) {
            clearInterval(intervalId);
            isStarted = false;
            seconds = minutes = hours = 0;
        }
    })

}