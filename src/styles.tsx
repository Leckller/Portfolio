import styled from 'styled-components';

export const ANC = styled.a`
animation: quiq 1000ms ease-in-out infinite alternate;
  @keyframes quiq {
    from {
      transform: translateY(-10px);
    }
    to {
      transform: translateY(10px);
    }
  }
`;

export const LabelAnc = styled.label`
  animation: aparecer 1000ms ease-in-out;
  @keyframes aparecer {
    from {
      filter: opacity(0);
    }
    to {
      filter: opacity(100)
    }
  }
`;

type OceanDivType = {
  left: number;
  time: number;
};

export const OceanDiv = styled.div<OceanDivType>`
  transform: translateY(-30vh);
  background-color: black;
  animation: roll ${(props) => `${props.time}ms`} infinite ease-in-out;
  transform: rotate(135deg);
  left: ${(prop) => `${prop.left}vw`};
  transform: scale(50%);
  border-radius: 69% 31% 100% 0% / 100% 32% 68% 0% ;
  @keyframes roll {
    from {
      filter: opacity(10px);
      transform: scale(50%) translateY(-150vh) rotate(135deg);
    }
    to {
      filter: opacity(0);
      transform: scale(50%) translateY(140vh) rotate(135deg);
    }
  }
`;

export const Test = styled.h1`
  text-shadow: 0px 0px 15px white;
  height: 100px;
  z-index: 11;
`;

export const CardStyle = styled.article`
  animation: aparecer 1700ms ease-out;
  
  @keyframes aparecer {
    from{
      filter: opacity(0)
    }
    to{
      filter: opacity(100)
    }
  }
`;
