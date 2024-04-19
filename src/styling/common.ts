import styled from 'styled-components';
import Colors from './color';

const Background = styled.div<{ $backgroundColor?: string }>`
  height: 100vh;
  min-height: 100vh;
  background-color: ${(props) => props.$backgroundColor || Colors.green_shade_0};
`;

const RegularText = styled.div<{ $textColor?: string, $textSize:string }>`
  color: ${(props) => props.$textColor};
  font-size: ${(props) => props.$textSize}; 
  line-spacing: 23px;
`;

const RegularIcon = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
`;


const CustomATag = styled.a`
   text-decoration: none;
`;

export { RegularText, RegularIcon, Background , CustomATag };
