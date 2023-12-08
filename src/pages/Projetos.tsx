// import ghibli from '../assets/ghibliAnimations.png';
import Card from '../components/Projetos/Card';
import jogoDaVeia from '../assets/jogoDaVeia.png';
import ruyTunes from '../assets/ruyTUnes.png';

function Projetos() {
  return (
    <main
      className="w-screen h-screen p-10 flex flex-row
      gap-10 items-center justify-center flex-wrap
      "
    >
      <Card image={ jogoDaVeia } title="Jogo Da Velha" url="https://jogo-da-veia.vercel.app/" />
      <Card image={ ruyTunes } title="ruyTunes" url="https://ruy-tunes.vercel.app/" />

    </main>
  );
}

export default Projetos;
