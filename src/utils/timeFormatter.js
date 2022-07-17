export default function timeFormatter(time) {
    const minutes = Math.trunc((time / 1000) / 60);
    const seconds = (time - (minutes * 60 * 1000)) / 1000;

    const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

    return `${minutes}:${formattedSeconds}`
}
