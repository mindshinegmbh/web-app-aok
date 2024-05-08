import styled from 'styled-components';

const TextAreaParent = styled.textarea<{ $textColor: string; $backgroundColor: string }>`
  color: ${(props) => props.$textColor};
  background-color: ${(props) => props.$backgroundColor};
  border-style: solid;
  border-width: 1px;
  border-radius: 15px;
  border-color: ${(props) => props.$backgroundColor};
  padding: 10px;

`;

export { TextAreaParent };
