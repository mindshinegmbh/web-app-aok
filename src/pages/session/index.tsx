import React, { useRef } from 'react';
import { useAppSelector } from '../../localredux/hooks';
import { SelectTransformedSessionData } from '../../localredux/session/selectors';
import withBase from 'hocs/base_page';
import CardComponent from './card';
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import BottomBar from 'components/bottom_bar';
import { BottomContentParent, MainContentParent } from './styles';
import { useBaseProps } from 'hocs/base_component';

function Session() {
  const { currentTheme } = useBaseProps();
  const sessionData = useAppSelector(SelectTransformedSessionData);
  const swiperRef = useRef<SwiperRef>(null);
  console.log(sessionData);

  return (
    <>
      <MainContentParent>
        <Swiper ref={swiperRef} >
          {sessionData?.cards?.map((card, index) => (
            <SwiperSlide key={index}>
              <CardComponent card={card} />
              <BottomContentParent $backgroundColor={currentTheme.colors.screen_background}>
                <BottomBar
                  letfOnClick={() => {
                    swiperRef?.current?.swiper?.slidePrev();
                  }}
                  rightOnClick={() => {
                    swiperRef?.current?.swiper?.slideNext();
                  }}
                />
              </BottomContentParent>
            </SwiperSlide>
          ))}
        </Swiper>
      </MainContentParent>
    </>
  );
}

export default withBase(Session);
