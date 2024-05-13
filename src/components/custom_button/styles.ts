import styled from 'styled-components';

const ButtonParent = styled.button<{$backgroundColor: string}>`
  background-color: ${props => props.$backgroundColor};
  align-items: center;
  width: 90%;
  padding-top: 15px;
  padding-bottom: 15px;
  border-radius: 5px;
  border: none;
  cursor:pointer;
`;


const TextParent = styled.div`
  margin-left: 10px;
`;
export { ButtonParent, TextParent };
