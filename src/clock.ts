import { format } from "./utils";

export const setUpClock = (clock: HTMLSpanElement) => {

    let intervalId: number | null = null;

    const updateClock = () => {

        const time = new Date();

        const timeFormated = `${format(time.getHours())}:${format(time.getMinutes())}:${format(time.getSeconds())}`;
        const dateFormated = `${time.getDate()}/${time.getMonth() + 1}/${time.getFullYear()}`;

        clock.innerText = `${timeFormated} | ${dateFormated}`;

    }

    updateClock();

    intervalId = window.setInterval(updateClock, 500);

    return () => { clearInterval(intervalId) }
};