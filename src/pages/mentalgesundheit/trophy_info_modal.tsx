import CustomLink from 'components/custom_link';
import { useBaseProps } from 'hocs/base_component';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { LargeText, RegularText } from 'styling/common';
import { CloseParent, TrophyInfoHeading, TrophyInfoParent } from './styles';

interface TrophyInfoModalProps {
  show: boolean;
  hideModal: () => void;
}

function TrophyInfoModal(props: TrophyInfoModalProps) {
  const { currentFont, currentTheme, t, currentSizes } = useBaseProps();
  return (
    <Modal show={props.show} onHide={props.hideModal}>
      <CloseParent>
        <CustomLink
          link={currentTheme.icons.close}
          alt={'close button info modal'}
          width={currentSizes.back.width}
          height={currentSizes.back.height}
          href={'#'}
          onCustomPress={props.hideModal}
        />
      </CloseParent>

      <TrophyInfoParent>
        <TrophyInfoHeading>
          <LargeText $textSize={currentFont.large_font} $textColor={currentTheme.colors.modal_text}>
            {t('mental_gesundheit.trophy_info_heading')}
          </LargeText>
        </TrophyInfoHeading>
        <RegularText
          $textSize={currentFont.regular_font_size}
          $textColor={currentTheme.colors.modal_text}
        >
          {t('mental_gesundheit.trophy_info_body')}
        </RegularText>
      </TrophyInfoParent>
    </Modal>
  );
}

export default TrophyInfoModal;
