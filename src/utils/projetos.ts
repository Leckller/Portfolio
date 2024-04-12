/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable max-len */
import { ProjetosType } from '../types';

const dataProjects: ProjetosType[] = [
  {
    title: 'fake-Itunnes',
    url: 'https://ruy-tunes.vercel.app/',
    describe: 'Descubra uma nova dimensão musical com o ruyTunes, o aplicativo de música que transforma sua experiência auditiva. Explore uma vasta biblioteca de músicas de alta qualidade diretamente do iTunes, proporcionando acesso instantâneo a milhões de faixas.',
    tecnologias: ['React', 'Redux', 'Redux-Thunk', 'Styled-Components', 'React-Router-Dom', 'Vite', 'TypeScript'],
    gitHub: 'https://github.com/Leckller/ruyTunes',
  },
  {
    title: 'previsão do tempo',
    url: 'https: //ruy-tempo.vercel.app/',
    describe: 'Um app de previsão do tempo',
    tecnologias: ['React', 'Tailwind', 'Vite', 'TypeScript'],
    gitHub: 'https://github.com/Leckller/previsaoDoTempo',
  },
  {
    title: 'Jogo Da Velha',
    url: 'https://jogo-da-veia.vercel.app/',
    describe: 'Um jogo da velha feito em react',
    tecnologias: ['React', 'Redux', 'Styled-Components', 'React-Router-Dom', 'Vite', 'TypeScript'],
    gitHub: 'https://github.com/Leckller/jogoDaVeia',
  },
  {
    title: 'Recipes App',
    url: 'https://app-de-receitas-umber.vercel.app/',
    describe: '',
    tecnologias: [
      'React',
      'Redux',
      'Redux-thunk',
      'Tailwind',
      'React-Router-Dom',
      'Vite',
      'TypeScript',
    ],
    gitHub: '',
  },
  {
    title: 'color guess',
    url: 'https://color-guess-xi.vercel.app',
    describe: '',
    tecnologias: [
      'HTML',
      'JavaScript',
      'CSS',
    ],
    gitHub: '',
  },
  {
    title: 'Pixels Art',
    url: 'https://pixels-art-orcin.vercel.app',
    describe: '',
    tecnologias: [
      'HTML',
      'JavaScript',
      'CSS',
      'LocalStorage',
    ],
    gitHub: '',
  },
  {
    title: 'Chinelinho',
    url: 'https://chinelinho.vercel.app/',
    describe: '',
    tecnologias: [
      'HTML',
      'CSS',
      'JavaScript',
    ],
    gitHub: '',
  },
  {
    title: 'Ghibli Animations',
    url: 'https://ghibli-animations-nine.vercel.app/',
    describe: '',
    tecnologias: [
      'React',
      'Context Api',
      'Styled-Components',
      'React-Router_Dom',
    ],
    gitHub: '',
  },
  {
    title: 'Teste de Gravidade',
    url: 'https://gravidade-vercel.vercel.app/',
    describe: '',
    tecnologias: [
      'HTML',
      'CSS',
      'JavaScript',
    ],
    gitHub: '',
  },
  {
    title: 'Apolo Clicker',
    url: 'https://apolo-clicker.vercel.app/',
    describe: '',
    tecnologias: [
      'React',
      'Redux',
      'Styled-Components',
      'LocalStorage',
    ],
    gitHub: '',
  },
];

export default function allProjects(): ProjetosType[] {
  return dataProjects;
}
