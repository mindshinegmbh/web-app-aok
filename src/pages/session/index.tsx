import React from 'react';
import { useAppSelector } from '../../localredux/hooks';
import { SelectTransformedSessionData } from '../../localredux/session/selectors';
import withBase from 'hocs/base_page';
import CardComponent from './card';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import BottomBar from 'components/bottom_bar';
import { useSwiper } from 'swiper/react';

function Session() {
  const sessionData = useAppSelector(SelectTransformedSessionData);
  const swiper = useSwiper();
  console.log(sessionData);

  return (
    <>
      <Swiper>
        {sessionData?.cards?.map((card, index) => (
          <SwiperSlide key={index}>
            <CardComponent card={card} />
          </SwiperSlide>
        ))}
      </Swiper>
      <BottomBar letfOnClick={() => {swiper.slidePrev()}} rightOnClick={() => {swiper.slideNext()}}/>
    </>
  );
}

export default withBase(Session);
