import { NavigateFunction } from 'react-router-dom';

export interface GetSession {
  sessionId: number;
  navigation: NavigateFunction;
}

export interface SetCardsData {
  inputData: InputData[];
  navigation: NavigateFunction;
}

export interface SessionSeverObject {
  id: number;
  title: string;
  description: string;
  cards: CardServerObject[];
}

export interface CardServerObject {
  id: number;
  session_id: number;
  title: string;
  text: string;
  audio_file: string;
  card_type: string;
  inputs: [];
  inputType: string;
  inputId: number;
}

export interface Session {
  id: number;
  title: string;
  numberOfCards: number;
  cards: Card[] | undefined;
}

export interface Card {
  id: number;
  title: string;
  body: string;
  bullet: string[];
  cardType: string;
  audio_url: string;
  inputs: [];
  inputType: string;
  inputId: number;
}

export interface SessionCardData {
  sessionId: number;
  inputs: InputData[];
}

export interface InputData {
  card_id: number;
  session_id: number;
  input_types: string;
  id: number;
  text: string;
  checkbox: Map<number, boolean>;
  radios: Map<number, boolean>;
}
