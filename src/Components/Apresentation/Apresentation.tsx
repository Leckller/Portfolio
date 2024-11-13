import Image from '../../Assets/midoryaRuyvoXD.jpg';
import { StyledApresentation } from './StyledApresentation';

function Apresentation() {
  return (
    <StyledApresentation>
      <img src={Image} alt="Ruy" />
      <article>
        <p>
          Olá, pessoa amável da internet!
        </p>
        <p>
          Meu nome é Gusttavo Ruy,
        </p>
        <p>
          Sou um Desenvolvedor Web Full Stack.
        </p>
      </article>
    </StyledApresentation>
  );
}

export default Apresentation;
