import { NavigateFunction } from 'react-router-dom';

export interface GetSession {
  sessionId: number;
  navigation: NavigateFunction;
}

export interface SessionSeverObject {
  id: number;
  title: string;
  description: string;
  cards: CardServerObject[];
}

export interface CardServerObject {
  session_id: number;
  title: string;
  text: string;
  audio_file: string;
  card_type: string;
  inputs: [];
  inputType: string;
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
}

export interface SessionCardData {
  sessionId: number;
  inputs: InputData[];
}

export interface InputData {
  id: number;
  text: string;
  checkbox: CheckboxInput[];
  radios: RadioInput[];
}

export interface CheckboxInput {
  id: number;
  value: boolean;
}

export interface RadioInput {
  id: number;
  value: boolean;
}
