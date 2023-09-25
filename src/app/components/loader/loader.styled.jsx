import { styled } from '@mui/material/styles';
import { keyframes } from '@mui/system';
import { Box } from '@mui/material';

const appear = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const anim = keyframes`
  0% {
    box-shadow: 0 0 50px #fff, inset 0 0 50px #fff;
  }
  20% {
    box-shadow: 0 0 50px #f00, inset 0 0 50px #f00;
  }
  40% {
    box-shadow: 0 0 50px #ff0, inset 0 0 50px #ff0;
  }
  60% {
    box-shadow: 0 0 50px #0ff, inset 0 0 50px #0ff;
  }
  80% {
    box-shadow: 0 0 50px #f0f, inset 0 0 50px #f0f;
  }
`;

const rise = keyframes`
  0% {
    transform: translateY(100%) rotateX(60deg) rotateZ(0deg) scale(0.5);
    opacity: 1;
  }
  10% {
    transform: translateY(80%) rotateX(62deg) rotateZ(36deg) scale(0.6);
    opacity: 0.9;
  }
  20% {
    transform: translateY(60%) rotateX(64deg) rotateZ(72deg) scale(0.72);
    opacity: 0.8;
  }
  30% {
    transform: translateY(40%) rotateX(66deg) rotateZ(108deg) scale(0.86);
    opacity: 0.6;
  }
  40% {
    transform: translateY(20%) rotateX(68deg) rotateZ(144deg) scale(1.03);
    opacity: 0.4;
  }
  50% {
    transform: translateY(0%) rotateX(70deg) rotateZ(180deg) scale(1.22);
    opacity: 0.3;
  }
  60% {
    transform: translateY(-20%) rotateX(72deg) rotateZ(216deg) scale(1.45);
    opacity: 0.2;
  }
  70% {
    transform: translateY(-40%) rotateX(74deg) rotateZ(252deg) scale(1.72);
    opacity: 0.1;
  }
  80% {
    transform: translateY(-60%) rotateX(76deg) rotateZ(288deg) scale(2.05);
    opacity: 0.05;
  }
  90% {
    transform: translateY(-80%) rotateX(78deg) rotateZ(324deg) scale(2.44);
    opacity: 0.02;
  }
  100% {
    transform: translateY(-100%) rotateX(80deg) rotateZ(360deg) scale(2.9); 
    opacity: 0;
  }
`;

const disappear = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const Container = styled(Box, {
  shouldForwardProp: prop => prop !== 'startDisappearing',
})(({ startDisappearing, theme }) => ({
  background: '#111',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  width: '100%',
  overflow: 'hidden',
  animation: startDisappearing
    ? `${disappear} 1000ms ease-in-out`
    : `${appear} 300ms ease-in-out`,
}));

export const Circle = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: '500px',
  width: '500px',
  filter: 'url(#wave)',
  transform: 'rotateX(60deg)',
  animation: `${rise} 3000ms linear infinite`,

  '&::before': {
    content: '""',
    position: 'absolute',
    top: '100px',
    left: '100px',
    right: '100px',
    bottom: '100px',
    border: '10px solid #fff',
    borderRadius: '50%',
    boxShadow: '0 0 50px #fff, inset 0 0 50px #fff',
    filter: 'url(#wave) blur(10px)',
    animation: `${anim} 3000ms linear infinite`,
  },
}));

export const SvgFilter = () => (
  <svg style={{ display: 'none' }}>
    <filter id="wave">
      <feTurbulence x="0" y="0" baseFrequency="0.009" numOctaves="5" seed="2">
        <animate
          attributeName="baseFrequency"
          dur="30s"
          values="0.02;0.005;0.02"
          repeatCount="indefinite"
        />
      </feTurbulence>
      <feDisplacementMap in="SourceGraphic" scale="30" />
    </filter>
  </svg>
);
