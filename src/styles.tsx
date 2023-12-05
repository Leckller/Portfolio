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
