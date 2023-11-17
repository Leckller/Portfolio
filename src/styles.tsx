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
  height: auto;
  background: linear-gradient(green, black);
`;

export const HEADER = styled.header`
  width: 100vw;
  height: 100px;
  display: flex;
  align-items: center;
  flex-flow: nowrap row;
  justify-content: space-between;
  button{
    margin: 0 40px;
    background-color: transparent;
    border: none;
    font-size: 30px;
    cursor: pointer;
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
  button{
    padding: 10px 20px;
    cursor: pointer;
    border: none;
    background-color: transparent;
    box-shadow: 3px 3px 7px #00000060;
    border-radius: 10px;
    font-size: .9rem;
  }
`;

export const BIG_SECTION = styled.section`
  width: 48%;
  height: 600px;
  border: solid black 1px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  padding: 20px;
  line-height: 22px;
  margin-bottom: 20px; 
  h2{
    font-size: 2rem;
    margin-bottom: 30px;
} p{
  font-size: 1.2rem;
}
`;

export const SMALL_SECTION = styled.section`
  width: 30%;
  border: solid black 1px;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  padding: 20px;
  line-height: 22px;
  h2{
    font-size: 2rem;
    margin-bottom: 30px;
  }
`;

export const FOOTER = styled.footer`
  width: 100vw;
  height: 100px;
`;
