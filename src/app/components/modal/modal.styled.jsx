import styled from '@emotion/styled';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1200;
`;

export const ModalWindow = styled.div`
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  transform: translate(-${props => props.left}, -${props => props.top});
  width: 100%;
  height: 100%;
  padding: 32px 16px;
  border-radius: 4px;
  border: 2px solid #586ba4;
  background: #fff;
  color: #000;
  @media (min-width: 600px) {
    padding: 32px;
    width: ${props => props.width};
    height: ${props => props.height};
  }
`;
