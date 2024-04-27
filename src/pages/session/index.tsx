import React from 'react';
import { useAppSelector } from '../../localredux/hooks';
import { SelectTransformedSessionData } from '../../localredux/session/selectors';
import withBase from 'hocs/base_page';
import CardComponent from './card';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

function Session() {
  const sessionData = useAppSelector(SelectTransformedSessionData);
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
    </>
  );
}

export default withBase(Session);
