import { tecnologias } from '../../utils/tecnologias';
import CardDetails from './CardDetails';

function Details() {
  return (
    <section
      id="details"
      className="flex h-screen flex-col w-screen
    items-center justify-around p-5 bg-black text-white
    "
    >
      <h1 className="p-5 overflow-hidden">Tecnologias</h1>
      <div
        className="flex flex-row flex-wrap w-full h-full
         items-center justify-around

        "
      >
        {tecnologias && tecnologias.map((tec) => (
          <CardDetails img={ tec.img } title={ tec.title } key={ tec.title } />
        ))}

      </div>

    </section>

  );
}

export default Details;
