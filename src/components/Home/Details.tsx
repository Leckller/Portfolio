import { projetos } from '../../utils/projetos';
import { tecnologias } from '../../utils/tecnologias';
import Card from '../Projetos/Card';
import CardDetails from './CardDetails';

function Details({ detail = false }: { detail?: boolean }) {
  return (
    <section
      id={ detail ? '' : 'details' }
      className={ `overflow-hidden flex h-full flex-col ${detail ? 'w-full' : 'w-screen'}
      items-start justify-around mt-5 gap-5 ${detail ? '' : 'bg-black'} 
      ${detail ? 'text-black' : 'text-white'} text-xl font-medium` }
    >

      <h1 className=" overflow-hidden">
        {detail ? 'Especializado nas Linguagens'
          : 'Projetos'}

      </h1>
      <div
        className="flex flex-row flex-wrap w-full
        items-center justify-around
        "
      >
        {detail ? (
          tecnologias && tecnologias.map((tec) => (
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

    </section>

  );
}

export default Details;
