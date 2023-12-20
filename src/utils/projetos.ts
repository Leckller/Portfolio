/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable max-len */
import jogoDaVeia from '../assets/jogoDaVeia.png';
import ruyTunes from '../assets/ruyTUnes.png';
import recipesApp from '../assets/logoPintada2.png';
import dede from '../assets/dedeprint.png';
import gravidade from '../assets/gravidadeImage.png';
import brejaImg from '../assets/brejaImage.png';
import ghibliImage from '../assets/totoro_08.jpg';
import chinelinImage from '../assets/chinelinImage.png';
import pixelsArtImage from '../assets/pixelsArtImage.png';
import colorGuessImage from '../assets/colorGuessImage.png';
import anyImage from '../assets/blackImage.jpeg';

import { ProjetosType } from '../types';

export const projetos:ProjetosType[] = [
  { image: anyImage,
    title: 'ruyMusic',
    url: 'https://ruy-music.vercel.app',
    describe: 'Um novo layout para o "ruyTunes" baseado no spotify mobile',
    isFinish: false,
    tecnologias: ['React', 'Redux', 'Tailwind', 'React-Router-Dom', 'Vite', 'TypeScript'],
    gitHub: '',
  },

  { image: jogoDaVeia,
    title: 'Jogo Da Velha',
    url: 'https://jogo-da-veia.vercel.app/',
    describe: '',
    isFinish: false,
    tecnologias: ['React', 'Redux', 'Styled-Components', 'React-Router-Dom', 'Vite', 'TypeScript'],
    gitHub: '',
  },

  { image: ruyTunes,
    title: 'ruyTunes',
    url: 'https://ruy-tunes.vercel.app/',
    describe: 'Descubra uma nova dimensão musical com o ruyTunes, o aplicativo de música que transforma sua experiência auditiva. Explore uma vasta biblioteca de músicas de alta qualidade diretamente do iTunes, proporcionando acesso instantâneo a milhões de faixas.',
    isFinish: false,
    tecnologias: ['React', 'Redux', 'Redux-Thunk', 'Styled-Components', 'React-Router-Dom', 'Vite', 'TypeScript'],
    gitHub: '',
  },

  { image: recipesApp,
    title: 'Recipes App',
    url: 'https://app-de-receitas-umber.vercel.app/',
    describe: '',
    isFinish: true,
    tecnologias: ['React', 'Redux', 'Redux-thunk', 'Tailwind', 'React-Router-Dom', 'Vite', 'TypeScript'],
    gitHub: '',
  },

  { image: colorGuessImage,
    title: 'color guess',
    url: 'https://color-guess-xi.vercel.app',
    describe: '',
    isFinish: true,
    tecnologias: ['HTML', 'JavaScript', 'CSS'],
    gitHub: '',
  },

  { image: pixelsArtImage,
    title: 'Pixels Art',
    url: 'https://pixels-art-orcin.vercel.app',
    describe: '',
    isFinish: true,
    tecnologias: ['HTML', 'JavaScript', 'CSS', 'LocalStorage'],
    gitHub: '',
  },

  { image: anyImage,
    title: 'RuyTTer 2.0',
    url: 'https://ruytt.vercel.app',
    describe: '',
    isFinish: false,
    tecnologias: ['React', 'Firebase', 'Tailwind', 'Redux', 'React-Router-Dom'],
    gitHub: '',
  },

  { image: anyImage,
    title: 'RuyTTer',
    url: 'https://ruytter-leckller.vercel.app/',
    describe: '',
    isFinish: false,
    tecnologias: ['React', 'Firebase', 'Styled-Components', 'Redux', 'React-Router-Dom'],
    gitHub: '',
  },

  { image: chinelinImage,
    title: 'Chinelinho',
    url: 'https://chinelinho.vercel.app/',
    describe: '',
    isFinish: false,
    tecnologias: ['HTML', 'CSS', 'JavaScript'],
    gitHub: '',
  },

  { image: ghibliImage,
    title: 'Ghibli Animations',
    url: 'https://ghibli-animations-nine.vercel.app/',
    describe: '',
    isFinish: true,
    tecnologias: ['React', 'Context Api', 'Styled-Components', 'React-Router_Dom'],
    gitHub: '',
  },

  { image: brejaImg,
    title: 'Breja',
    url: 'https://breja-two.vercel.app/',
    describe: '',
    isFinish: true,
    tecnologias: ['HTML', 'CSS', 'JavaScript'],
    gitHub: '',
  },

  { image: gravidade,
    title: 'Teste de Gravidade',
    url: 'https://gravidade-vercel.vercel.app/',
    describe: '',
    isFinish: true,
    tecnologias: ['HTML', 'CSS', 'JavaScript'],
    gitHub: '',
  },

  { image: dede,
    title: 'Apolo Clicker',
    url: 'https://apolo-clicker.vercel.app/',
    describe: '',
    isFinish: true,
    tecnologias: ['React', 'Redux', 'Styled-Components', 'LocalStorage'],
    gitHub: '',
  },
];
