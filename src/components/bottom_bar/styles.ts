import { motion } from 'framer-motion';
import styled from 'styled-components';

const BottomBarParent = styled(motion.div)`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export { BottomBarParent };
