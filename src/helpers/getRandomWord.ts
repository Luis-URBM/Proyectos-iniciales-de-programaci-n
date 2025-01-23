let words: string[] = [
    'COMPUTADORA',
    'LOLSITO',
    'MANTEQUILLA',
    'NAVIDAD',
    'AREPA',
    'TACOS',
    'CUADERNO',
    'MATEMATICA',
    'COMIDA',
    'HELADO',
    'CANTINA',
    'RANCHITO',
    'MUSICA',
    'PISCINA',
    'MINIMAPA',
    'CASTILLO',
    'AVION',
    'BALON',
    'MOTOCICLETA',
    'CRUCERO',
    'MAQUILLAJE',
    'TELEVISOR',
    'DIENTES',
    'MEXICO',
    'BARCELONA',
    'GUADALAJARA',
    'ESPEJO'
]


export function getRandomWord() {

    const randomIndex =  Math.floor( Math.random() * words.length );
    return words[randomIndex];
}