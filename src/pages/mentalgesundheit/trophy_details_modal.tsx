import React from 'react';
import CustomLink from 'components/custom_link';
import { useBaseProps } from 'hocs/base_component';
import Modal from 'react-bootstrap/Modal';
import { Bold, LargeText, RegularText } from 'styling/common';
import { CloseParent, LiParent, TrophyInfoHeading, TrophyInfoParent, UlParent } from './styles';

interface TrophyDetailsModalProps {
  show: boolean;
  hideModal: () => void;
}

function TrophyDetailsModal(props: TrophyDetailsModalProps) {
  const { currentFont, currentTheme, t, currentSizes } = useBaseProps();
  const list = Array.from(Array(13).keys());
  return (
    <Modal role="contentinfo" show={props.show} onHide={props.hideModal}>
      <CloseParent>
        <CustomLink
          link={currentTheme.icons.close}
          alt={'close button info  2 modal'}
          width={currentSizes.back.width}
          height={currentSizes.back.height}
          href={'#'}
          onCustomPress={props.hideModal}
        />
      </CloseParent>

      <TrophyInfoParent>
        <TrophyInfoHeading>
          <LargeText $textSize={currentFont.large_font} $textColor={currentTheme.colors.modal_text}>
            {t('mental_gesundheit.trophy_details_heading')}
          </LargeText>
        </TrophyInfoHeading>
        <UlParent $textColor={currentTheme.colors.modal_text}>
          {list.map((bullet, index) => {
            return (
              <LiParent key={index}>
                <RegularText
                  $textSize={currentFont.regular_font_size}
                  $textColor={currentTheme.colors.modal_text}
                >
                  <Bold>{t('mental_gesundheit.heading' + bullet)}</Bold>
                  {t('mental_gesundheit.body' + bullet)}
                </RegularText>
              </LiParent>
            );
          })}
        </UlParent>
      </TrophyInfoParent>
    </Modal>
  );
}

export default TrophyDetailsModal;
