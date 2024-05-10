import React, {  useRef, useState } from 'react';
import { useAppSelector } from '../../localredux/hooks';
import { SelectTransformedSessionData } from '../../localredux/session/selectors';
import withBase from 'hocs/base_page';
import CardComponent from './card';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import BottomBar from 'components/bottom_bar';
import {
  BottomContentParent,
  MainContentParent,
  MainSwipeChild,
  MainSwipeContainer,
  Slide,
} from './styles';
import { useBaseProps } from 'hocs/base_component';

function Session() {
  const { currentTheme } = useBaseProps();
  const [currentIndex, setCurrentIndex] = useState(0);
  const sessionData = useAppSelector(SelectTransformedSessionData);
  const swiperRef = useRef(null);
  console.log(sessionData);

  const slideRight = () => {
    const cardsNumber = sessionData?.cards?.length || 0;
    if (currentIndex < cardsNumber - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const slideLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <MainContentParent>
      <MainSwipeContainer ref={swiperRef}>
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
