import React, { useEffect } from 'react';
import { LargeText } from '../../styling/common';
import { useAppDispatch } from '../../localredux/hooks';
import { getSessionData } from '../../localredux/session';
import withBase from 'hocs/base_page';
import { useBaseProps } from 'hocs/base_component';
import { HomeParent } from './styles';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import loading from 'images/lotties/loading.json';
import { AnimatePresence } from 'framer-motion';
import { sendPageEvent } from 'utils/analytics';
import { Pages } from 'utils/custom_events';

function Home() {
  const { currentFont, currentTheme } = useBaseProps();
  const navigation = useNavigate();
  const dispatch = useAppDispatch();
  useEffect(() => {
    sendPageEvent(Pages.home, Pages.home)
    dispatch(getSessionData({ sessionId: 23, navigation }));
  });

  return (
    <HomeParent>
      <AnimatePresence>
        <LargeText
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          $textSize={currentFont.regular_font_size}
          $textColor={currentTheme.colors.settings_button_color}
        >
          Logging you in , Bitte warten
        </LargeText>
      </AnimatePresence>
      <Lottie animationData={loading} loop={true} />
    </HomeParent>
  );
}

export default withBase(Home);
