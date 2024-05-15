import { motion } from 'framer-motion';
import styled from 'styled-components';
import { SwiperSlide } from 'swiper/react';

const MainContentParent = styled.div<{$backgroundColor: string}>`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: ${(props) => props.$backgroundColor};
  padding-bottom: 100px;
`;

const BodyTextParent = styled.div`
  margin-top: 24px;
  text-align: justify;
`;

const BottomContentParent = styled.div<{ $backgroundColor: string }>`
  display: flex;
  flex: 1;
  background-color: ${(props) => props.$backgroundColor};
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`;

const Session = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`;

const CardParent = styled.div<{$backgroundColor: string}>`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 15px;
  background-color: ${(props) => props.$backgroundColor};
`;

const CenterTextParent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-top: 34px;
  padding-left: 15px;
  padding-right: 15px;
`;

const UlParent = styled(motion.ul)<{ $textColor: string }>`
  color: ${(props) => props.$textColor};
`;

const TextAreaParent = styled.textarea<{ $textColor: string; $backgroundColor: string }>`
  color: ${(props) => props.$textColor};
  background-color: ${(props) => props.$backgroundColor};
  border-style: solid;
  border-width: 1px;
  border-radius: 15px;
  border-color: ${(props) => props.$backgroundColor};
  padding: 10px;
`;

const InputParent = styled.div`
  display: flex;
  flex: 1;
`;

const InputCheckboxParent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const FixedSlide = styled(SwiperSlide)`
  height: 250px;
`;

const MainSwipeContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`;
const MainSwipeChild = styled.div`
  display: flex;
  transition: transform 0.3s ease;
  margin-top: 50px;
`;

const Slide = styled.div`
  flex: 1 0 100%;
  min-width: 100%;
  height: 90%;
`;

export {
  Session,
  CardParent,
  CenterTextParent,
  UlParent,
  TextAreaParent,
  MainContentParent,
  BottomContentParent,
  InputParent,
  InputCheckboxParent,
  BodyTextParent,
  FixedSlide,
  MainSwipeChild,
  MainSwipeContainer,
  Slide
};
