/**
 * @description Парсинг строки в число (время)
 * @param { String } time - Время, в виде строки '3.min', '1.h' и т.д.
 * @returns { Number }
 */
export default function timeParser(time) {
    const timeValue = time.split('.')[0];
    const timeDefinition = time.split('.')[1];

    switch (timeDefinition) {
        case 's':
            return Number(timeValue * 1000);
        case 'min':
            return Number(timeValue * 60 * 1000);
        case 'h':
            return Number(timeValue * 3600 * 1000);
        default:
            return 0;
    }
}
