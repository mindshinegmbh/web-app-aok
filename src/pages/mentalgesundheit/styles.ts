import styled from 'styled-components';

const MentalGesundheitParent = styled.div<{ $backgroundColor: string }>`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-top: 32px;
  padding-left: 16px;
  padding-right: 16px;
  background-color: ${(props) => props.$backgroundColor};
`;

const IndexInfoParent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  font-weight: 700;
`;

const Bold = styled.span`
  font-weight: 700;
`;

const IndexNumberParent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const IndexFirstChild = styled.p`
  display: flex;
  flex: 1;
  margin-top: 20px;
`;
const IndexSecondChild = styled.div`
  display: flex;
  flex: 1;
  margin-top: 20px;
`;
const IndexThirdChild = styled.div`
  display: flex;
  flex: 1;
  margin-top: 6px;
`;

const IndexFifthChild = styled.div`
  display: flex;
  flex: 1;
  margin-top: 20px;
`;

const IndexFourthChild = styled.div`
  display: flex;
  flex: 1;
  margin-top: 20px;
`;

const IndexSixthChild = styled.div`
  display: flex;
  flex: 1;
  margin-top: 6px;
`;

const IconTextChild = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
`;

const TextSpaceLeft = styled.div`
  margin-left: 15px;
`;

const IconTextParent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  margin-top: 34px;
`;

const Link = styled.span<{ $textColor?: string }>`
  color: ${(props) => props.$textColor};
  text-decoration: underline;
`;

const ButtonParent = styled.div`
  display: flex;
  flex: 1;
  margin-top: 32px;
  margin-bottom: 32px;
  width: 30%;
  justify-content: left;
  align-items: left;
  align-self: flex-end;
`;

const FeedbackParent = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  justify-content: center;
  margin-top: 15px;
`;

const Divider = styled.div<{ $backgroundColor: string }>`
  width: 100%;
  height: 1px;
  background-color: ${(props) => props.$backgroundColor};
  opacity: 0.4;
  margin-top: 20px;
`;

const CloseParent = styled.div`
  display: flex;
  flex: 1;
  margin-top: 24px;
  margin-right: 24px;
  justify-content: left;
  align-items: left;
  align-self: flex-end;
`;

const TrophyInfoParent = styled.div`
  display: flex;
  flex: 1;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 24px;
  flex-direction: column;
`;

const TrophyInfoHeading = styled.div`
  margin-bottom: 16px;
`;

export {
  MentalGesundheitParent,
  FeedbackParent,
  ButtonParent,
  IndexInfoParent,
  IndexNumberParent,
  IndexFifthChild,
  IndexFirstChild,
  IndexSixthChild,
  IndexThirdChild,
  IndexSecondChild,
  IndexFourthChild,
  Bold,
  Link,
  Divider,
  IconTextChild,
  IconTextParent,
  TextSpaceLeft,
  CloseParent,
  TrophyInfoHeading,
  TrophyInfoParent,
};
