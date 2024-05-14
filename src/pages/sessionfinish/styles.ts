import { motion } from 'framer-motion';
import styled from 'styled-components';

const SessionFinishParent = styled(motion.div)<{ $backgroundColor: string }>`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
  background-color: ${(props) => props.$backgroundColor};
`;

const FeedbackTextParent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 6px;
`;

const BodyTextParent = styled.div`
  white-space: pre-line;
  text-align: center;
  margin-top: 36px;
`;

const ButtonParent = styled.div`
  display: flex;
  flex: 1;
  margin-top: 32px;
  margin-bottom: 32px;
  width: 100%;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

const FensterParent = styled(motion.div)<{ $decorationColor: string }>`
  white-space: pre-line;
  text-align: center;
  text-decoration: underline;
  text-decoration-color: ${(props) => props.$decorationColor};
  margin-top: 28px;
`;

const FeedbackParent = styled(motion.div)<{ $showFenster: boolean }>`
  display: flex;
  flex: 1;
  width: 90%;
  justify-content: center;
  margin-top: 15px;
`;

const FeedbackBarParent = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  flex-direction: column;
  width: 85%;
`;

const IconParent = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  margin-top: 20px;
`;

export {
  FeedbackTextParent,
  SessionFinishParent,
  BodyTextParent,
  FensterParent,
  FeedbackParent,
  FeedbackBarParent,
  IconParent,
  ButtonParent,
};
