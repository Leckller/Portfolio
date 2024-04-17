/* eslint-disable complexity */
/* eslint-disable react/jsx-max-depth */
import { useContext } from 'react';
import DetailsCursos from './DetailsCursos';
import DetailsTecnologias from './DetailsTecnologias';
import DetailsAnc from './DetailsAnc';
import AppContext from '../../Context/AppContext';

function Details({ detail = false }: { detail?: boolean }) {
  const { endFirstDetail } = useContext(AppContext);
  return (
    <section
      id={ detail ? '' : 'details' }
      className={ `
      overflow-hidden flex h-full flex-col ${detail ? 'w-full' : 'w-screen'}
      items-start justify-around mt-5 gap-5 ${detail ? '' : 'bg-black'} 
      ${detail ? 'text-black' : 'text-white'} text-xl font-medium` }
    >

      <div className="md:flex-row flex-col flex w-full">
        <DetailsTecnologias detail={ detail } />
        {(endFirstDetail && detail) && <DetailsCursos />}
      </div>

      {(endFirstDetail && detail) && (
        <DetailsAnc />
      )}

    </section>

  );
}

export default Details;
