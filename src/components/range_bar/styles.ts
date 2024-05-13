import styled from 'styled-components';

const RangeBarParent = styled.input<{$backgroundColor: string}>`
  background-color: ${props => props.$backgroundColor};
  color: ${props => props.$backgroundColor};
  accent-color: ${props => props.$backgroundColor};
  align-items: center;
  width: 100%;
  height: 2px;
  padding-top: 15px;
  padding-bottom: 15px;
  border-radius: 5px;
  border: none;
  cursor:pointer;
`;

export { RangeBarParent };
