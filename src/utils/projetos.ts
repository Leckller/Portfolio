import jogoDaVeia from '../assets/jogoDaVeia.png';
import ruyTunes from '../assets/ruyTUnes.png';
import { ProjetosType } from '../types';

export const projetos:ProjetosType[] = [
  { image: jogoDaVeia,
    title: 'Jogo Da Velha',
    url: 'https://jogo-da-veia.vercel.app/',
    describe: '',
    isFinish: true,
    tecnologias: ['React', 'Redux', 'Styled-Components',
      'React-Router-Dom', 'Vite', 'TypeScript'] },
  { image: ruyTunes,
    title: 'ruyTunes',
    url: 'https://ruy-tunes.vercel.app/',
    describe: '',
    isFinish: true,
    tecnologias: ['React', 'Redux', 'Redux-Thunk', 'Styled-Components',
      'React-Router-Dom', 'Vite', 'TypeScript'] },
];
