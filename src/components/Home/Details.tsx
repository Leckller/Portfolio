import { FaArrowAltCircleDown, FaLongArrowAltDown } from 'react-icons/fa';
import useWriteText from '../../hooks/useWriteText';
import { ANC, ArrowDown, LabelAnc } from '../../styles';
import { projetos } from '../../utils/projetos';
import { tecnologias } from '../../utils/tecnologias';
import Card from '../Projetos/Card';
import CardDetails from './CardDetails';

function Details({ detail = false }: { detail?: boolean }) {
  const title = detail ? 'Especializado nas Tecnologias' : 'Projetos';
  const write = useWriteText(title, 20);
  const writeimages = useWriteText(tecnologias, 300);

  return (
    <section
      id={ detail ? '' : 'details' }
      className={ `overflow-hidden flex h-full flex-col ${detail ? 'w-full' : 'w-screen'}
      items-start justify-around mt-5 gap-5 ${detail ? '' : 'bg-black'} 
      ${detail ? 'text-black' : 'text-white'} text-xl font-medium` }
    >

      <h1
        className={ `overflow-hidden h-16 justify-start
        relative w-96 flex flex-row items-center gap-5
        ${detail ? '' : 'pl-5'}` }
      >
        {`${title.slice(0, write)} ${write >= title.length ? '' : '|'}`}
        <ArrowDown detail={ detail }>
          <FaArrowAltCircleDown className={ `${detail ? '' : '-rotate-45'}` } />
        </ArrowDown>
      </h1>
      {write >= title.length ? (
        <div
          className={ `flex flex-row flex-wrap
          items-center justify-around gap-1 mb-16 
          ${detail ? 'md:border-r-2 md:w-1/2' : 'overflow-y-hidden w-full'}` }
        >
          {detail ? (
            tecnologias && tecnologias.slice(0, writeimages).map((tec) => (
              <CardDetails
                img={ tec.img }
                title={ tec.title }
                key={ tec.title }
              />
            ))

          ) : (

            projetos && projetos.map((proj) => (
              <Card
                url={ proj.url }
                image={ proj.img }
                title={ proj.title }
                key={ proj.title }
              />
            ))
          )}

        </div>
      ) : (
        <div />
      )}
      {writeimages >= tecnologias.length && (
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

      )}
    </section>

  );
}

export default Details;
