/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-max-depth */
/* eslint-disable max-len */
import { FaLongArrowAltDown } from 'react-icons/fa';
import useWriteText from '../hooks/useWriteText';
import { ANC, LabelAnc } from '../styles';

function Home() {
  const text = 'Olá, me chamo Ruy ;D';
  const text2 = 'Sou um desenvolvedor web apaixonado por transformar ideias criativas em experiências digitais incríveis.';
  const writeT1 = useWriteText(text, 40);
  const writeT2 = useWriteText(text2, 20, writeT1 >= text.length);

  return (
    <main className="w-screen flex overflow-y-scroll flex-col items-center">

      <section className="w-full h-screen flex items-start justify-center">
        <article className="flex flex-col items-center gap-10">

          <h1 className="text-5xl">{`${text.slice(0, writeT1)}${writeT1 >= text.length ? '' : '|'}`}</h1>
          <h2>{writeT1 >= text.length ? `${text2.slice(0, writeT2)}${writeT2 >= text2.length ? '' : '|'}` : ''}</h2>

          {writeT2 >= text2.length ? (
            <LabelAnc
              htmlFor="more"
              className="flex flex-col items-center absolute gap-5 bottom-8"
            >
              <div className="text-center">
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
                justify-center"
              >
                <FaLongArrowAltDown />
              </ANC>
            </LabelAnc>
          ) : (
            ''
          )}

        </article>

      </section>
      <section>
        <div id="details" />
      </section>
    </main>
  );
}

export default Home;
