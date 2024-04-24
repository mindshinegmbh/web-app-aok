import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Card, Session } from 'models/session_type';

export const SelectSessionData = (state: RootState) => state.session.session;

export const SelectTransformedSessionData = createSelector(SelectSessionData, (data) => {
    console.log(data)
    const cards: Card[] | undefined = data?.cards?.map((value) => {
        return {
            id: value.id,
            title: value.title,
            body: value.body,
            bullet: value.bullet,
            cardType: value.cardType,
            audio_url: value.audio_url,
            inputType: value.inputType
        }
    })
    const session: Session = {
        id: data?.id || 0,
        title: data?.title || "",
        numberOfCards: data?.numberOfCards || 0,
        cards: cards
    }
    return session;
  })