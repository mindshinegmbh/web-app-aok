import styled from 'styled-components';
import Colors from 'styling/color';

const BackgroundAudioPlayer = styled.div<{ $backgroundColor?: string }>`
  display: flex;
  flex: 1;
  flex-direction: row;
  padding: 5px;
  border-radius: 10px;
  align-content: space-evenly;
  background-color: ${(props) => props.$backgroundColor || Colors.green_shade_0};
`;

const AudioPlayerComponents = styled.div`
  display: flex;
  flex: 0.6;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const AudioPlayerProgress = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-content: center;
  justify-content: center;
`;

const Circle = styled.div<{ $backgroundColor?: string; $borderColor?: string }>`
  width: 30px;
  height: 30px;
  border-style: solid;
  border-width: 1px;
  border-radius: 15px;
  border-color: ${(props) => props.$borderColor};
  background-color: ${(props) => props.$backgroundColor};
  justify-content: center;
  align-items: center;
  align-content: center;
  display: flex;
  flex-wrap: wrap;
`;

const CircleMiddle = styled.div<{ $backgroundColor?: string; $borderColor?: string }>`
  width: 45px;
  height: 45px;
  border-style: solid;
  border-width: 1px;
  border-radius: 22.5px;
  border-color: ${(props) => props.$borderColor};
  background-color: ${(props) => props.$backgroundColor};
  justify-content: center;
  align-items: center;
  align-content: center;
  display: flex;
  flex-wrap: wrap;
`;

export { BackgroundAudioPlayer, Circle, CircleMiddle, AudioPlayerComponents, AudioPlayerProgress };
