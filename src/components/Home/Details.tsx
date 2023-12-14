/* eslint-disable complexity */
/* eslint-disable react/jsx-max-depth */
import { tecnologias } from '../../utils/tecnologias';
import DetailsCursos from './DetailsCursos';
import DetailsTecnologias from './DetailsTecnologias';
import DetailsAnc from './DetailsAnc';

function Details({ detail = false }: { detail?: boolean }) {
  return (
    <section
      id={ detail ? '' : 'details' }
      className={ `overflow-hidden flex h-full flex-col ${detail ? 'w-full' : 'w-screen'}
      items-start justify-around mt-5 gap-5 ${detail ? '' : 'bg-black'} 
      ${detail ? 'text-black' : 'text-white'} text-xl font-medium` }
    >

      <div className="md:flex-row flex-col flex w-full">
        <DetailsTecnologias detail={ detail } />
        {detail && <DetailsCursos />}
      </div>

      {tecnologias.length <= 100 && (
        <DetailsAnc />
      )}
    </section>

  );
}

export default Details;
