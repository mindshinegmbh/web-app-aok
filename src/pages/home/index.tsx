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

function Home() {
  const { currentFont, currentTheme } = useBaseProps();
  const navigation = useNavigate();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getSessionData({ sessionId: 23, navigation }));
  });

  return (
    <HomeParent>
      <LargeText
        $textSize={currentFont.regular_font_size}
        $textColor={currentTheme.colors.settings_button_color}
      >
        Logging you in , Bitte warten
      </LargeText>
      <Lottie animationData={loading} loop={true} />
    </HomeParent>
  );
}

export default withBase(Home);
