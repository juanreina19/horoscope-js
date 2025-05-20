// model.js
export const ZODIAC_SIGNS = [
    { "sign": "Aries", "start": "03-21", "end": "04-19", "horoscope": "Hoy es un buen día para comenzar algo nuevo.", "emoji": "🔥" },
    { "sign": "Tauro", "start": "04-20", "end": "05-20", "horoscope": "La paciencia será tu mejor aliada.", "emoji": "🐂" },
    { "sign": "Géminis", "start": "05-21", "end": "06-20", "horoscope": "Una conversación inesperada traerá claridad.", "emoji": "🌀" },
    { "sign": "Cáncer", "start": "06-21", "end": "07-22", "horoscope": "Escucha a tu intuición y sigue tu corazón.", "emoji": "🦀" },
    { "sign": "Leo", "start": "07-23", "end": "08-22", "horoscope": "El reconocimiento está más cerca de lo que crees.", "emoji": "🦁" },
    { "sign": "Virgo", "start": "08-23", "end": "09-22", "horoscope": "Hoy es ideal para poner orden a tus ideas.", "emoji": "🌾" },
    { "sign": "Libra", "start": "09-23", "end": "10-22", "horoscope": "El equilibrio emocional será clave este día.", "emoji": "⚖️" },
    { "sign": "Escorpio", "start": "10-23", "end": "11-21", "horoscope": "Enfrenta tus miedos y descubrirás tu fuerza.", "emoji": "🦂" },
    { "sign": "Sagitario", "start": "11-22", "end": "12-21", "horoscope": "La aventura te espera, atrévete a salir.", "emoji": "🏹" },
    { "sign": "Capricornio", "start": "12-22", "end": "01-19", "horoscope": "El esfuerzo constante traerá resultados.", "emoji": "🐐" },
    { "sign": "Acuario", "start": "01-20", "end": "02-18", "horoscope": "Una idea innovadora puede marcar la diferencia.", "emoji": "🌊" },
    { "sign": "Piscis", "start": "02-19", "end": "03-20", "horoscope": "Conéctate con tus emociones más profundas.", "emoji": "🐟" },
];


export function getZodiacSign(dateStr) {
    const date = new Date(dateStr);
    const month = date.getMonth() + 1; // 1-12
    const day = date.getDate();

    for (const sign of ZODIAC_SIGNS) {
        const [startMonth, startDay] = sign.start.split('-').map(Number);
        const [endMonth, endDay] = sign.end.split('-').map(Number);

        if (
            (month === startMonth && day >= startDay) ||
            (month === endMonth && day <= endDay) ||
            (startMonth > endMonth && (month === startMonth || month === endMonth) &&
                ((month === startMonth && day >= startDay) || (month === endMonth && day <= endDay)))
        ) {
            return sign;
        }
    }

    return null;
}