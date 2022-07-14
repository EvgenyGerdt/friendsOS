import timeParser from "../utils/timeParser";

/**
 * @description Хук таймера
 * @param time { String } - Время, которое должен отработать таймер, передается в формате '3.min', '1.h' и т.д.
 */
export default function useTimer(time) {
    let isTimerStarted = JSON.parse(localStorage.getItem('timer')).isStarted;

    const isTimerAlreadyExists = !!localStorage.getItem('timer');

    if (!isTimerAlreadyExists) {
        localStorage.setItem('timer', JSON.stringify({
            time: timeParser(time),
            isStarted: false,
        }));
    }

    const startTimer = () => {
        const timerInterval = setInterval(() => {
            isTimerStarted = true;
            localStorage.setItem('timer', JSON.stringify(calculateTime()));

            if (JSON.parse(localStorage.getItem('timer')).time <= 0) {
                stopTimer();
            }

            console.log(localStorage.getItem('timer'))
        }, 1000);

        const stopTimer = () => {
            clearInterval(timerInterval);
            localStorage.setItem('timer', JSON.stringify({
                time: 20000,
                isStarted: false,
            }));
        };
    };

    const calculateTime = () => {
        return {
            time: JSON.parse(localStorage.getItem('timer')).time - 1000,
            isStarted: true,
        };
    };

    if (isTimerAlreadyExists) {
        const { isStarted } = JSON.parse(localStorage.getItem('timer'));

        if (isStarted) {
            startTimer();
        }
    }

    return {
        startTimer,
        isTimerStarted,
    };
}
