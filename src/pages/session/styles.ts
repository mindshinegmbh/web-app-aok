import styled from 'styled-components';

const Session = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  padding: 1em 0.25em 1em;
`;

const CardParent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  padding: 1em 0.25em 1em;
`;

const CenterTextParent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 1em 0.25em 1em;
`;

const UlParent = styled.ul<{ $textColor: string }>`
  color: ${(props) => props.$textColor};
`;

const TextAreaParent = styled.textarea<{ $textColor: string; $backgroundColor: string }>`
  color: ${(props) => props.$textColor};
  background-color: ${(props) => props.$backgroundColor};
  border-style: solid;
  border-width: 1px;
  border-radius: 15px;
  border-color: ${(props) => props.$backgroundColor};
  padding: 10px
  
`;
export { Session, CardParent, CenterTextParent, UlParent, TextAreaParent };
