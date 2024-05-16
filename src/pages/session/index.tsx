/* eslint-disable react-hooks/exhaustive-deps */
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

function Session() {
  const { currentTheme } = useBaseProps();
  const [currentIndex, setCurrentIndex] = useState(0);
  const sessionData = useAppSelector(SelectTransformedSessionData);
  const swiperRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.onpageshow = function (event) {
      if (event.persisted) {
        window.location.reload();
      }
    };
  }, []);

  const slideRight = () => {
    const cardsNumber = sessionData?.cards?.length || 0;
    if (currentIndex < cardsNumber - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigate('/session_finish');
    }
  };

  const slideLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <MainContentParent $backgroundColor={currentTheme.colors.screen_background}>
      <MainSwipeContainer ref={swiperRef}>
        <CardsPager total={sessionData?.cards?.length || 0} current={currentIndex + 1} />
        <MainSwipeChild style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {sessionData?.cards?.map((card, index) => (
            <Slide key={index}>
              <CardComponent card={card} />
            </Slide>
          ))}
        </MainSwipeChild>
        <BottomContentParent $backgroundColor={currentTheme.colors.screen_background}>
          <BottomBar letfOnClick={() => slideLeft()} rightOnClick={() => slideRight()} />
        </BottomContentParent>
      </MainSwipeContainer>
    </MainContentParent>
  );
}

export default withBase(Session);
