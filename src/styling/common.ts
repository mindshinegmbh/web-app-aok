import styled from 'styled-components';
import Colors from './color';

const RegularText = styled.div<{ $textColor?: string }>`
  color: ${(props) => props.$textColor || Colors.green_shade_4};
  font-size: 17px;
  line-spacing: 23px;
`;

export { RegularText };
