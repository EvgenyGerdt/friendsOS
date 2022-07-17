import timeParser from "../../utils/timeParser";
import timeFormatter from "../../utils/timeFormatter";
import { ref } from "vue";

/**
 * @description Хук таймера
 * @param time { String } - Время, которое должен отработать таймер, передается в формате '3.min', '1.h' и т.д.
 */
export default function useTimer(time) {
    const currentTime = ref('');

    let isTimerStarted = ref(JSON.parse(localStorage.getItem('timer'))?.isStarted || false);
    const isTimerAlreadyExists = !!localStorage.getItem('timer');

    if (!isTimerAlreadyExists) {
        localStorage.setItem('timer', JSON.stringify({
            time: timeParser(time),
            isStarted: false,
        }));
    }

    const startTimer = () => {
        const timerInterval = setInterval(() => {
            isTimerStarted.value = true;
            localStorage.setItem('timer', JSON.stringify(calculateTime()));

            if (JSON.parse(localStorage.getItem('timer')).time <= 0) {
                stopTimer();
            }
        }, 1000);

        const stopTimer = () => {
            isTimerStarted.value = false;
            clearInterval(timerInterval);
            localStorage.setItem('timer', JSON.stringify({
                time: 20000,
                isStarted: false,
            }));
        };
    };

    const calculateTime = () => {
        currentTime.value = timeFormatter(JSON.parse(localStorage.getItem('timer')).time - 1000);
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
        currentTime,
    };
}
