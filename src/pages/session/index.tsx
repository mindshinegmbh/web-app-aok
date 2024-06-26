import React, { useEffect, useRef, useState } from 'react';
import { useAppSelector } from '../../localredux/hooks';
import { SelectTransformedSessionData } from '../../localredux/session/selectors';
import withBase from 'hocs/base_page';
import CardComponent from './card';
import BottomBar from 'components/bottom_bar';
import {
  BottomContentParent,
  MainContentParent,
  MainSwipeChild,
  MainSwipeContainer,
  Slide,
} from './styles';
import { useBaseProps } from 'hocs/base_component';
import { useNavigate } from 'react-router-dom';
import CardsPager from 'components/cards_pager';
import { sendPageEvent } from 'utils/analytics';
import { Pages } from 'utils/custom_events';
import { useImmer } from 'use-immer';
import { InputData } from 'models/session_type';
import { setCardsData } from 'localredux/session';

function Session() {
  const { currentTheme, dispatch } = useBaseProps();
  const [currentIndex, setCurrentIndex] = useState(0);
  const sessionData = useAppSelector(SelectTransformedSessionData);
  const swiperRef = useRef(null);
  const navigate = useNavigate();
  const [selectedInputValues, setSelectedInputValues] = useImmer<InputData[]>([]);

  useEffect(() => {
    sendPageEvent(Pages.session, Pages.session);
  }, []);

  useEffect(() => {
    sessionData?.cards?.forEach((card) => {
      const inputId = card.inputId;
      const inputType = card.inputType;
      const cardId = card.id;
      const sessionId = sessionData?.id;
      const inputObject = {
        card_id: cardId,
        session_id: sessionId,
        input_types: inputType,
        id: inputId,
        text: '',
        checkbox: new Map(),
        radios: new Map(),
      };
      setSelectedInputValues((draft) => {
        draft.push(inputObject);
      });
    });
  }, []);

  const slideRight = () => {
    const cardsNumber = sessionData?.cards?.length || 0;
    if (currentIndex < cardsNumber - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      saveData();
      navigate('/session_finish');
    }
  };

  const slideLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const saveData = () => {
    dispatch(setCardsData(selectedInputValues));
  };
  return (
    <MainContentParent
      role='main'
      aria-roledescription='session cards'
      $backgroundColor={currentTheme.colors.screen_background}
    >
      <MainSwipeContainer ref={swiperRef}>
        <CardsPager total={sessionData?.cards?.length || 0} current={currentIndex + 1} />

        <MainSwipeChild style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {sessionData?.cards?.map((card, index) => (
            <Slide
              aria-label={'session no' + index + 1 + 'out of ' + sessionData?.cards?.length}
              key={index}
            >
              <CardComponent selectedInputValues={selectedInputValues} setSelectedInputValues={setSelectedInputValues} card={card} />
            </Slide>
          ))}
        </MainSwipeChild>
        <BottomContentParent
          aria-label='to navigate between session cards'
          $backgroundColor={currentTheme.colors.screen_background}
        >
          <BottomBar letfOnClick={() => slideLeft()} rightOnClick={() => slideRight()} />
        </BottomContentParent>
      </MainSwipeContainer>
    </MainContentParent>
  );
}

export default withBase(Session);
