export interface Session {
    id: number;
    title: string;
    numberOfCards: number
    cards: Card[] | undefined
}

export interface Card{
    id: number
    title: string;
    body: string;
    bullet: string[];
    cardType: string;
    audio_url: string;
    inputType: string;
}