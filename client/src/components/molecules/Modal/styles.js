import styled from 'styled-components';

export const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background: white;
`;

export const StyledModalWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledCloseButtonContainer = styled.div`
  position: fixed;
  top: 2em;
  right: 2em;

  i {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.5em;
    height: 1.5em;

    font-size: 1.2em;
    color: white;

    border-radius: 100%;

    cursor: pointer;

    &:hover {
      background: white;
    }
  }
`;

export const StyledModal = styled.div`
  max-width: 800px;
  padding: 1em;
  border-radius: 0.375em;
  background: white;
`;
