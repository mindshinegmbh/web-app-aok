import React, { useContext, useState } from 'react';
import { ThemeContext } from 'styling/themes';
import { SettingListParent } from './styles';
import SettingsButton from 'components/settings_button';
import DarkModeButton from './dark_mode';
import FontModeButton from './large_text_mode';
import { useNavigate } from 'react-router-dom';
import withBase from 'hocs/base_page';
import BarrierFreiheitModal from './barrierfreiheit_modal';

function Settings() {
  const theme = useContext(ThemeContext);
  const navigation = useNavigate();
  const [zeigenBarrierFreiheit, setZeigenBarrierFreihei] = useState(false);

  const versteckenBarrierFreiheitModal = () => {
    setZeigenBarrierFreihei(false);
  };
  const zeigenBarrierFreiheitModal = () => {
    setZeigenBarrierFreihei(true);
  };

  return (
    <>
      <BarrierFreiheitModal
        zeigen={zeigenBarrierFreiheit}
        versteckenModal={versteckenBarrierFreiheitModal}
      />
      <SettingListParent aria-roledescription='page to show session finsish' role='main'>
        <SettingsButton
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
          <SettingsButton
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
