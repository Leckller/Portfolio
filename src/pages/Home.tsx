/* eslint-disable max-len */
import useWriteText from '../hooks/useWriteText';

function Home() {
  const text = 'Olá, me chamo Ruy ;D';
  const text2 = 'Sou um desenvolvedor web apaixonado por transformar ideias criativas em experiências digitais incríveis.';
  const writeT1 = useWriteText(text);
  const writeT2 = useWriteText(text2, 20, writeT1 >= text.length);

  return (
    <main className="w-screen h-screen flex flex-col items-center">
      <section className="w-full flex items-center justify-center h-56">
        <article className="flex flex-col items-center gap-10">
          <h1 className="text-5xl">{text.slice(0, writeT1)}</h1>
          <h2>{writeT1 >= text.length ? text2.slice(0, writeT2) : ''}</h2>
        </article>
      </section>
    </main>
  );
}

export default Home;
