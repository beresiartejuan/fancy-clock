import { format } from "./utils";

export const setUpClock = (clock: HTMLSpanElement) => {
    const time = new Date();

    const timeFormated = `${format(time.getHours())}:${format(time.getMinutes())}:${format(time.getSeconds())}`;
    const dateFormated = `${time.getDate()}/${time.getMonth()}/${time.getFullYear()}`;

    clock.innerText = `${timeFormated} | ${dateFormated}`;

    window.requestAnimationFrame(() => setUpClock(clock));

};