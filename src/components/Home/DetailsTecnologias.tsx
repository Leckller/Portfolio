import { FaArrowAltCircleDown } from 'react-icons/fa';
import useWriteText from '../../hooks/useWriteText';
import { ArrowDown } from '../../styles';
import { projetos } from '../../utils/projetos';
import { tecnologias } from '../../utils/tecnologias';
import Card from '../Projetos/Card';
import CardDetails from './CardDetails';

function DetailsTecnologias({ detail }: { detail: boolean }) {
  const title = detail ? 'Especializado nas Tecnologias' : 'Projetos';
  const write = useWriteText(title, 20);
  const writeimages = useWriteText(tecnologias, 300);
  return (
    <div className="flex flex-col w-1/2">
      <h1
        className={ `overflow-hidden h-16 justify-start
  relative w-96 flex flex-row items-center gap-5
  ${detail ? '' : 'pl-5'}` }
      >
        {`${title.slice(0, write)} ${write >= title.length ? '' : '|'}`}
        {write >= title.length && (
          <ArrowDown detail={ detail }>
            <FaArrowAltCircleDown className={ `${detail ? '' : '-rotate-45'}` } />
          </ArrowDown>
        )}
      </h1>
      {write >= title.length ? (
        <div
          className={ `flex flex-row flex-wrap
    items-center justify-around gap-1 mb-16 
    ${detail ? 'md:border-r-2' : 'overflow-y-hidden w-full'}` }
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
    </div>
  );
}

export default DetailsTecnologias;
