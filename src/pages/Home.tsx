/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-max-depth */
/* eslint-disable max-len */
import useWriteText from '../hooks/useWriteText';
import { OceanDiv, MainText } from '../styles';
import Gotinhas from '../utils/Gotinhas';
import Details from '../components/Home/Details';
import waves from '../assets/Wave.svg';
import DetailsButtons from '../components/Home/DetailsButtons';

function Home() {
  const text = 'Olá, me chamo Ruy.';
  const text2 = 'Sou um desenvolvedor web apaixonado por transformar ideias criativas em experiências digitais incríveis.';
  const writeT1 = useWriteText(text, 40);
  const writeT2 = useWriteText(text2, 20, writeT1 >= text.length);
  return (
    <main className="w-screen flex overflow-y-scroll flex-col items-start">
      {writeT2 >= text2.length && Gotinhas(window.innerWidth >= 550 ? 30 : 10).map((({ left, time, id }) => (
        <OceanDiv
          key={ id }
          left={ left }
          time={ time }
          className="bg-red-400 w-32 h-32 absolute left-0"
        />
      )))}

      <section className="w-full pl-3 h-full flex flex-row items-start">

        <article className="flex flex-col items-start text-start z-20 overflow-y-hidden w-full">
          <MainText className="text-5xl">{`${text.slice(0, writeT1)}${writeT1 >= text.length ? '' : '|'}`}</MainText>
          <h2 className=" text-2xl">{writeT1 >= text.length ? `${text2.slice(0, writeT2)}${writeT2 >= text2.length ? '' : '|'}` : ''}</h2>

          {writeT2 >= text2.length && (
            <>
              <Details detail />
              <DetailsButtons />
            </>
          )}
        </article>

      </section>
      <img
        src={ waves }
        alt="waves"
        className="w-screen translate-y-5"
      />
      <Details />
    </main>
  );
}

export default Home;
