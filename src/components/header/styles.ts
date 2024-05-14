import styled from 'styled-components';
import { motion } from 'framer-motion';

const MainParent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`;

const HeaderParent = styled(motion.div)`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const SettingsIconParent = styled(motion.div)`
  margin-right: 15px;
`;

const Divider = styled.div<{ $backgroundColor: string }>`
  width: 100%;
  height: 1px;
  background-color: ${(props) => props.$backgroundColor};
`;

export { HeaderParent, SettingsIconParent, Divider, MainParent };
