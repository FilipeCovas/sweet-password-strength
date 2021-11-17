import styled, { keyframes } from 'styled-components';
interface IGadientStriped {
  color: string;
  angle: string;
}
const GradientStriped = ({
  color = 'rgba(255,255,255,.15)',
  angle = '45deg',
}: IGadientStriped) => `
  background-image: -webkit-linear-gradient(${angle}, ${color} 25%, transparent 25%, transparent 50%, ${color} 50%, ${color} 75%, transparent 75%, transparent);
  background-image: -o-linear-gradient(${angle}, ${color} 25%, transparent 25%, transparent 50%, ${color} 50%, ${color} 75%, transparent 75%, transparent);
  background-image: linear-gradient(${angle}, ${color} 25%, transparent 25%, transparent 50%, ${color} 50%, ${color} 75%, transparent 75%, transparent);
`;

const progressBarStripesAnimation = keyframes`
  0% {
    background-position: 40px 0;
  }
  100% {
    background-position: 0 0;
  }
`;

export const Container = styled.div`
  width: 100%;
  background-color: #edf2f7;
  border-radius: 3px;
  height: 25px;
  position: relative;
  margin: 10px 0;
`;

export const Filler: any = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 25px;
  width: ${(props: any) => props.completed}%;
  background-color: ${(props: any) => `${props.bgcolor}c2`};
  transition: width 1s ease-in-out;
  border-radius: 'inherit';
  text-align: 'right';
  border-radius: 3px;
  z-index: 0;
  background-size: 40px 40px;
  animation: ${progressBarStripesAnimation} 2s linear infinite;
  ${(props: any) =>
    GradientStriped({
      color: `${props.bgcolor}`,
      angle: '45deg',
    })}
`;

export const Label: any = styled.span`
  position: absolute;
  left: 10px;
  bottom: 5px;
  padding: 0;
  color: #fff;
  text-shadow: 1px 1px 2px #00000070;
  font-weight: bold;
  z-index: 1;
`;
