import styled from 'styled-components';
import Colors from './color';

const Background = styled.div<{ $backgroundColor?: string }>`
  height: 100vh;
  min-height: 100vh;
  background-color: ${(props) => props.$backgroundColor || Colors.green_shade_0};
`;

const RegularText = styled.div<{ $textColor?: string, $textSize:string }>`
  font-family: 'AOK Buenos Aires', sans-serif;
  color: ${(props) => props.$textColor};
  font-size: ${(props) => props.$textSize}; 
  line-spacing: 23px;
`;

const XSmallText = styled.div<{ $textColor?: string, $textSize:string, $textWeight:string  }>`
  font-family: 'AOK Buenos Aires', sans-serif;
  color: ${(props) => props.$textColor};
  font-size: ${(props) => props.$textSize}; 
  font-weight: ${(props) => props.$textWeight}; 
  line-spacing: 20px;
`;



const RegularIcon = styled.img<{ $width?: string, $height?: string }>`
  width: ${(props) => props.$width} | 24px;
  height:  ${(props) => props.$height} | 24px;
  object-fit: contain;
`;

const CustomATag = styled.a`
   text-decoration: none;
`;

export { RegularText, RegularIcon, Background , CustomATag , XSmallText };
