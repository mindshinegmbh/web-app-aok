import React, { useState } from 'react';
import { Bold, LargeText, SmallText, XLargeText } from '../../styling/common';
import withBase from 'hocs/base_page';
import { useBaseProps } from 'hocs/base_component';
import {
  ButtonParent,
  Divider,
  FeedbackParent,
  IconTextChild,
  IconTextParent,
  IndexFifthChild,
  IndexFirstChild,
  IndexFourthChild,
  IndexInfoParent,
  IndexNumberParent,
  IndexSecondChild,
  IndexThirdChild,
  Link,
  MentalGesundheitParent,
  TextSpaceLeft,
} from './styles';
import Icon from 'components/icon';
import CustomTextArea from 'components/custom_textarea';
import CustomButton from 'components/custom_button';
import TrophyInfoModal from './trophy_info_modal';
import CustomLink from 'components/custom_link';
import TrophyDetailsModal from './trophy_details_modal';
import { motion } from 'framer-motion';
import {
  buttonAnimationHoverCircle,
  buttonAnimationTap,
  buttonAnimationTransition,
} from 'utils/constants';

function MentalGesundheit() {
  const { currentFont, currentTheme, t, currentSizes } = useBaseProps();
  const [done, setDone] = useState(false);
  const [showTrophyInfo, setShowTrophyInfo] = useState(false);
  const [showTrophyDetails, setShowTrophyDetails] = useState(false);

  const onClickSend = () => {
    setDone(true);
  };

  const hideTrophyInfoModal = () => {
    setShowTrophyInfo(false);
  };
  const showTrophyInfoModal = () => {
    setShowTrophyInfo(true);
  };
  const hideTrophyDetailsModal = () => {
    setShowTrophyDetails(false);
  };
  const showTrophyDetailsModal = () => {
    setShowTrophyDetails(true);
  };
  return (
    <MentalGesundheitParent role="main" aria-roledescription='this page is for your profile' $backgroundColor={currentTheme.colors.screen_background}>
      <TrophyInfoModal show={showTrophyInfo} hideModal={hideTrophyInfoModal} />
      <TrophyDetailsModal show={showTrophyDetails} hideModal={hideTrophyDetailsModal} />

      <XLargeText
        $textSize={currentFont.xlarge_font}
        $textColor={currentTheme.colors.all_white_color}
      >
        {t('mental_gesundheit.heading')}
      </XLargeText>
      <IndexInfoParent>
        <LargeText
          $textSize={currentFont.large_font}
          $textColor={currentTheme.colors.all_white_color}
        >
          {t('mental_gesundheit.body_text_1')}
        </LargeText>
        <motion.div
          whileHover={buttonAnimationHoverCircle}
          whileTap={buttonAnimationTap}
          transition={buttonAnimationTransition}
          aria-modal
          aria-haspopup
        >
          <CustomLink
            link={currentTheme.icons.info}
            alt={'info button 1'}
            width={currentSizes.back.width}
            height={currentSizes.back.height}
            href={'#'}
            onCustomPress={showTrophyInfoModal}
          />
        </motion.div>
      </IndexInfoParent>
      <IndexNumberParent aria-label='value of index'>
        <LargeText
          $textSize={currentFont.large_font}
          $textColor={currentTheme.colors.all_white_color}
        >
          86
        </LargeText>
      </IndexNumberParent>
      <IndexFirstChild>
        <SmallText
          $textSize={currentFont.small_font}
          $textColor={currentTheme.colors.all_white_color}
        >
          <Link $textColor={currentTheme.colors.gesundheit_link_color}>
            {t('mental_gesundheit.body_text_2')}
          </Link>
          {t('mental_gesundheit.body_text_3')}
        </SmallText>
      </IndexFirstChild>
      <IndexSecondChild>
        <SmallText
          $textSize={currentFont.small_font}
          $textColor={currentTheme.colors.all_white_color}
        >
          {t('mental_gesundheit.body_text_4')} <Bold>8</Bold>
          {t('mental_gesundheit.body_text_5')}
        </SmallText>
      </IndexSecondChild>
      <IndexThirdChild>
        <SmallText
          $textSize={currentFont.small_font}
          $textColor={currentTheme.colors.all_white_color}
        >
          {t('mental_gesundheit.body_text_4')} <Bold>43</Bold>
          {t('mental_gesundheit.body_text_6')}
        </SmallText>
      </IndexThirdChild>
      <IndexFourthChild>
        <SmallText
          $textSize={currentFont.small_font}
          $textColor={currentTheme.colors.all_white_color}
        >
          {t('mental_gesundheit.body_text_4')} <Bold>329</Bold>
          {t('mental_gesundheit.body_text_7')}
        </SmallText>
      </IndexFourthChild>
      <IndexFifthChild>
        <SmallText
          $textSize={currentFont.small_font}
          $textColor={currentTheme.colors.all_white_color}
        >
          {t('mental_gesundheit.body_text_8')}
        </SmallText>
      </IndexFifthChild>
      <Divider $backgroundColor={currentTheme.colors.all_white_color} />
      <IndexInfoParent>
        <LargeText
          $textSize={currentFont.large_font}
          $textColor={currentTheme.colors.all_white_color}
        >
          {t('mental_gesundheit.heading_2')}
        </LargeText>
        <motion.div
          whileHover={buttonAnimationHoverCircle}
          whileTap={buttonAnimationTap}
          transition={buttonAnimationTransition}
          aria-modal
          aria-haspopup
        >
          <CustomLink
            link={currentTheme.icons.info}
            alt={'info button 2'}
            width={currentSizes.back.width}
            height={currentSizes.back.height}
            href={'#'}
            onCustomPress={showTrophyDetailsModal}
          />
        </motion.div>
      </IndexInfoParent>
      <IconTextParent aria-label='this section represents values of badges'>
        <IconTextChild>
          <Icon
            link={currentTheme.icons.badges[0]}
            alt={t('mental_gesundheit.badge_2')}
            width={currentSizes.back.width}
            height={currentSizes.back.height}
          />
          <TextSpaceLeft>
            <SmallText
              $textSize={currentFont.small_font}
              $textColor={currentTheme.colors.all_white_color}
            >
              {t('mental_gesundheit.badge_1')}
            </SmallText>
          </TextSpaceLeft>
        </IconTextChild>
        <IconTextChild>
          <Icon
            link={currentTheme.icons.badges[3]}
            alt={t('mental_gesundheit.badge_2')}
            width={currentSizes.back.width}
            height={currentSizes.back.height}
          />
          <TextSpaceLeft>
            <SmallText
              $textSize={currentFont.small_font}
              $textColor={currentTheme.colors.all_white_color}
            >
              {t('mental_gesundheit.badge_2')}
            </SmallText>
          </TextSpaceLeft>
        </IconTextChild>
      </IconTextParent>
      <IconTextParent>
        <IconTextChild>
          <Icon
            link={currentTheme.icons.badges[2]}
            alt={t('mental_gesundheit.badge_1')}
            width={currentSizes.back.width}
            height={currentSizes.back.height}
          />
          <TextSpaceLeft>
            <SmallText
              $textSize={currentFont.small_font}
              $textColor={currentTheme.colors.all_white_color}
            >
              {t('mental_gesundheit.badge_3')}
            </SmallText>
          </TextSpaceLeft>
        </IconTextChild>
        <IconTextChild>
          <Icon
            link={currentTheme.icons.badges[1]}
            alt={t('mental_gesundheit.badge_4')}
            width={currentSizes.back.width}
            height={currentSizes.back.height}
          />
          <TextSpaceLeft>
            <SmallText
              $textSize={currentFont.small_font}
              $textColor={currentTheme.colors.all_white_color}
            >
              {t('mental_gesundheit.badge_4')}
            </SmallText>
          </TextSpaceLeft>
        </IconTextChild>
      </IconTextParent>
      <Divider $backgroundColor={currentTheme.colors.all_white_color} />
      <IndexInfoParent>
        <LargeText
          $textSize={currentFont.large_font}
          $textColor={currentTheme.colors.all_white_color}
        >
          {t('mental_gesundheit.feedback')}
        </LargeText>
      </IndexInfoParent>

      {!done && (
        <FeedbackParent id="feedbackform" aria-roledescription='you can file in feedback here' role="form">
          <CustomTextArea placeholder={t('mental_gesundheit.feedback_placeholder')} />
        </FeedbackParent>
      )}
      {done && (
        <FeedbackParent id="feedbackbutton" aria-controls="feedbackform" aria-expanded={false}>
          <LargeText
            $textSize={currentFont.large_font}
            $textColor={currentTheme.colors.all_white_color}
          >
            {t('mental_gesundheit.danke')}
          </LargeText>
        </FeedbackParent>
      )}
      <ButtonParent>
        {<CustomButton onClick={() => onClickSend()} text={t('mental_gesundheit.send')} />}
      </ButtonParent>
    </MentalGesundheitParent>
  );
}

export default withBase(MentalGesundheit);
