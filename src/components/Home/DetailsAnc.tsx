import { FaLongArrowAltDown } from 'react-icons/fa';
import { ANC, LabelAnc } from '../../styles';

function DetailsAnc() {
  return (
    <LabelAnc
      htmlFor="more"
      className="flex flex-col
        w-full h-1/4 justify-center
        items-center gap-2 pb-10"
    >
      <div className="text-center text-black">
        <h3>
          Ficou interessado?
        </h3>
        <h3>
          clique aqui para ver meus projetos
        </h3>
      </div>
      <ANC
        href="#details"
        className="w-10 h-10 rounded-full border border-black flex items-center
          justify-center text-black"
      >
        <FaLongArrowAltDown />
      </ANC>
    </LabelAnc>
  );
}

export default DetailsAnc;
