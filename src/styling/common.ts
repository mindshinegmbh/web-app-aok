import styled from 'styled-components';
import Colors from './color';

const Background = styled.div<{ $backgroundColor?: string }>`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.$backgroundColor || Colors.green_shade_4};
`;

const RegularText = styled.div<{ $textColor?: string }>`
  color: ${(props) => props.$textColor || Colors.green_shade_4};
  font-size: 17px;
  line-spacing: 23px;
`;

const RegularIcon = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
`;

export { RegularText, RegularIcon, Background };
