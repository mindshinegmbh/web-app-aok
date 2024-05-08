import styled from 'styled-components';

const RadioButtonParent = styled.a<{$backgroundColor: string}>`
  display: flex;
  flex: 1;
  flex-direction: row;
  background-color: ${props => props.$backgroundColor};
  text-decoration: none;
  margin: 5px;
  margin-left: 20px;
  align-items: center;
`;


const TextParent = styled.div`
  margin-left: 10px;
`;
export { RadioButtonParent, TextParent };
