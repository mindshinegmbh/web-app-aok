import React from 'react';
import CustomLink from 'components/custom_link';
import { useBaseProps } from 'hocs/base_component';
import Modal from 'react-bootstrap/Modal';
import { LargeText, RegularText } from 'styling/common';
import { CloseParent, BarrierFreiheitHeading, BarrierFreiheitParent } from './styles';

interface BarrierFreiheitModalProps {
  zeigen: boolean;
  versteckenModal: () => void;
}

function BarrierFreiheitModal(props: BarrierFreiheitModalProps) {
  const { currentFont, currentTheme, t, currentSizes } = useBaseProps();
  return (
    <Modal role="contentinfo" show={props.zeigen} onHide={props.versteckenModal}>
      <CloseParent>
        <CustomLink
          link={currentTheme.icons.close}
          alt={'close button  modal'}
          width={currentSizes.back.width}
          height={currentSizes.back.height}
          href={'#'}
          onCustomPress={props.versteckenModal}
        />
      </CloseParent>

      <BarrierFreiheitParent>
        <BarrierFreiheitHeading>
          <LargeText $textSize={currentFont.large_font} $textColor={currentTheme.colors.modal_text}>
            {t('mental_gesundheit.barrierfreiheit_heading')}
          </LargeText>
        </BarrierFreiheitHeading>
        <RegularText
          $textSize={currentFont.regular_font_size}
          $textColor={currentTheme.colors.modal_text}
        >
          {t('mental_gesundheit.barrierfreiheit_body')}
        </RegularText>
      </BarrierFreiheitParent>
    </Modal>
  );
}

export default BarrierFreiheitModal;
