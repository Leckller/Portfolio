import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const GLOBAL_BG = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const HEADER = styled.header`
  width: 100vw;
  height: 100px;
  display: flex;
  align-items: center;
  flex-flow: nowrap row;
  justify-content: space-between;
  button{
    margin: 0 30px;
  }
  nav{
    margin-right: 20px;
  }
`;

export const MAIN = styled.main`
  display: flex;
  flex-flow: wrap row;
  gap: 5%;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const BIG_SECTION = styled.section`
  width: 48%;
  height: 600px;
  border: solid black 1px;
`;

export const SMALL_SECTION = styled.section`
  width: 30%;
  border: solid black 1px;
  height: 600px;
`;
