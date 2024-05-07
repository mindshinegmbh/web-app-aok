import React, { useRef, useState } from 'react';
import { useAppSelector } from '../../localredux/hooks';
import { SelectTransformedSessionData } from '../../localredux/session/selectors';
import withBase from 'hocs/base_page';
import CardComponent from './card';
import { Swiper, SwiperSlide, SwiperProps, SwiperRef } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import BottomBar from 'components/bottom_bar';
import { BottomContentParent, MainContentParent } from './styles';
import { useBaseProps } from 'hocs/base_component';

function Session() {
  const {currentTheme} = useBaseProps()
  const sessionData = useAppSelector(SelectTransformedSessionData);
  const swiperRef = useRef<SwiperRef>(null)
  
  return (
    <>
      <MainContentParent>
        <Swiper  ref={swiperRef}>
          {sessionData?.cards?.map((card, index) => (
            <SwiperSlide key={index}>
              <CardComponent card={card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </MainContentParent>
      <BottomContentParent $backgroundColor={currentTheme.colors.screen_background}>
        <BottomBar
          letfOnClick={() => {
            swiperRef?.current?.swiper?.slidePrev()
          }}
          rightOnClick={() => {
            swiperRef?.current?.swiper?.slideNext()
          }}
        />
      </BottomContentParent>
    </>
  );
}

export default withBase(Session);
