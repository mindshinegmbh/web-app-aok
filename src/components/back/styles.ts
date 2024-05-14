import { motion } from 'framer-motion';
import styled from 'styled-components';

const MainParent = styled(motion.div)`
  display: flex;
  flex: 1;
`;

const BackParent = styled.a`
  display: flex;
  flex: 1;
  flex-direction: row;
  text-decoration: none;
  margin-left: 15px;
`;

const TextParent = styled.div`
  margin-left: 5px;
`;

export { BackParent, TextParent, MainParent };
