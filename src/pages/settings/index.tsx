import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'styling/themes';
import { SettingListParent } from './styles';
import IconButton from 'components/icon_button';
import DarkModeButton from './dark_mode';
import FontModeButton from './large_text_mode';
import { useNavigate } from 'react-router-dom';
import withBase from 'hocs/base_page';
import BarrierFreiheitModal from './barrierfreiheit_modal';
import { sendCustomEvent, sendPageEvent } from 'utils/analytics';
import { GA4Category, GA4Event, Pages } from 'utils/custom_events';

function Settings() {
  const theme = useContext(ThemeContext);
  const navigation = useNavigate();
  const [zeigenBarrierFreiheit, setZeigenBarrierFreihei] = useState(false);

  const versteckenBarrierFreiheitModal = () => {
    setZeigenBarrierFreihei(false);
  };
  const zeigenBarrierFreiheitModal = () => {
    sendCustomEvent(GA4Category.settings, GA4Event.accessibility_click);
    setZeigenBarrierFreihei(true);
  };

  useEffect(() => {
    sendPageEvent(Pages.settings, Pages.settings);
  }, []);

  return (
    <>
      <BarrierFreiheitModal
        zeigen={zeigenBarrierFreiheit}
        versteckenModal={versteckenBarrierFreiheitModal}
      />
      <SettingListParent aria-roledescription='page to show session finsish' role='main'>
        <IconButton
          testid={'training'}
          onClick={() => {
            navigation('/home');
          }}
          alt={'training link'}
          image={theme.icons.right_arrow}
          text={'settings_page.first_line_text'}
        />
        <DarkModeButton />
        <FontModeButton />
        <div aria-modal aria-haspopup>
          <IconButton
            testid={'barrier'}
            onClick={() => zeigenBarrierFreiheitModal()}
            alt={'barrier link'}
            image={theme.icons.right_arrow}
            text={'settings_page.fourth_line_text'}
          />
        </div>
      </SettingListParent>
    </>
  );
}

export default withBase(Settings);
