import { motion } from 'framer-motion';
import styled from 'styled-components';

const PagerParent = styled(motion.div)<{ $backgroundColor: string; $borderColor: string }>`
  display: inline-flex;
  flex-direction: row;
  background-color: ${(props) => props.$backgroundColor};
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 20px;
  padding-right: 20px;
  padding-left: 20px;
  border-color: ${(props) => props.$borderColor};
  border-width: 1px;
  border-style: solid;
  position: absolute;
  right: 0px;
  margin-top: 15px;
  margin-right: 30px;
  justify-content: center;
  align-items: center;
`;

const DotParent = styled.div``;

const DotActive = styled(motion.div)<{ $backgroundColor: string }>`
  background-color: ${(props) => props.$backgroundColor};
  width: 8px;
  height: 8px;
  border-radius: 4px;
  margin: 5px;
`;

const DotInactive = styled(motion.div)<{ $backgroundColor: string; $isNext: boolean }>`
  background-color: ${(props) => props.$backgroundColor};
  width: ${(props) => (props.$isNext ? '8px' : '4px')};
  height: ${(props) => (props.$isNext ? '8px' : '4px')};
  border-radius: ${(props) => (props.$isNext ? '4px' : '2px')};
  margin: 5px;
`;
export { PagerParent, DotActive, DotInactive, DotParent };
