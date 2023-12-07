/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-max-depth */
/* eslint-disable max-len */
import { FaLongArrowAltDown } from 'react-icons/fa';
import useWriteText from '../hooks/useWriteText';
import { ANC, LabelAnc, OceanDiv, Test } from '../styles';
import Gotinhas from '../utils/Gotinhas';

function Home() {
  const text = 'Olá, me chamo Ruy ;D';
  const text2 = 'Sou um desenvolvedor web apaixonado por transformar ideias criativas em experiências digitais incríveis.';
  const writeT1 = useWriteText(text, 40);
  const writeT2 = useWriteText(text2, 20, writeT1 >= text.length);
  return (
    <main className="w-screen flex overflow-y-scroll flex-col items-center">
      {writeT2 >= text2.length && Gotinhas(30).map((({ left, time, id }) => (
        <OceanDiv
          key={ id }
          left={ left }
          time={ time }
          className="bg-red-400 w-32 h-32 absolute left-0"
        />
      )))}

      <section className="w-full h-screen flex items-start justify-center">
        <article className="flex flex-col items-center gap-10 z-20 overflow-hidden">

          <Test className="text-5xl h-20">{`${text.slice(0, writeT1)}${writeT1 >= text.length ? '' : '|'}`}</Test>
          <h2>{writeT1 >= text.length ? `${text2.slice(0, writeT2)}${writeT2 >= text2.length ? '' : '|'}` : ''}</h2>

          {writeT2 >= text2.length ? (
            <LabelAnc
              htmlFor="more"
              className="flex flex-col
              w-screen h-1/4 justify-center
              items-center absolute gap-5 bottom-8 translate-y-10"
            >
              <div className="text-center text-black">
                <h3>
                  Ficou interessado?
                </h3>
                <h3>
                  clique aqui para ver mais
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
          ) : (
            ''
          )}

        </article>

      </section>
      <section className="flex h-screen w-screen">
        <div id="details">
          a
        </div>
      </section>
    </main>
  );
}

export default Home;
