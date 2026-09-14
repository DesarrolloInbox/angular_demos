export interface Heroe {
    id: number;
    nombre: string;
    poderes: Poderes;
    imagen: string;
    bando: 'bueno' | 'malo'
}

export interface Poderes {
    velocidad: number;
    fuerza: number;
    inteligencia: number;
    combate: number;
    resistencia: number;
}

export type Poder = keyof Poderes;