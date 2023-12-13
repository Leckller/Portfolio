import {
  FaLongArrowAltDown, FaLongArrowAltLeft,
  FaLongArrowAltRight,
} from 'react-icons/fa';
import { ANC, ButtonDetails, DivButtonDetails, LabelAnc } from '../../styles';

type DetType = { left: boolean, right: boolean };

function DetailsButtons() {
  const handleClick = (direc: string) => {

  };
  return (
    <DivButtonDetails
      className="w-full h-full text-xl flex flex-col
    items-start overflow-hidden"
    >
      <div
        className="md:flex hidden flex-col
              w-screen h-1/4 justify-center
              items-center absolute gap-3 top-1/3 translate-y-10"
      >
        <div className="text-center text-black flex">
          <h3 className="w-52">
            Clique para saber mais sobre mim
          </h3>
        </div>
        <ButtonDetails
          onClick={ () => handleClick('right') }
          className="w-10 h-10 rounded-full border border-black md:flex hidden
          items-center
          justify-center text-black"
        >
          <FaLongArrowAltRight />
        </ButtonDetails>
      </div>

      <div
        className="md:flex  flex-col hidden
              w-screen h-1/4 justify-center
              items-center absolute gap-3 top-1/2 translate-y-10"
      >
        <div className="text-center text-black">
          <h3 className="w-52">
            Especializado nas tecnologias
          </h3>
        </div>
        <ButtonDetails
          onClick={ () => handleClick('left') }
          className="w-10 h-10 rounded-full border border-black flex items-center
                justify-center text-black"
        >
          <FaLongArrowAltLeft />
        </ButtonDetails>
      </div>
    </DivButtonDetails>
  );
}

export default DetailsButtons;
