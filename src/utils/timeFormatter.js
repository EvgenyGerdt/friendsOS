export default function timeFormatter(time) {
    const minutes = Math.trunc((time / 1000) / 60);

    return `${time}:${time}`
}
