import { GotaType } from '../types';

function Gotinhas(numGotas: number = 10) {
  const gotas:GotaType[] = [];
  for (let i = 0; gotas.length <= numGotas; i++) {
    if (gotas.length < 10) {
      gotas.push({ left: i * 10, time: Math.floor(Math.random() * 4000 + 2000), id: i });
    } else {
      const randomLeft = Math.floor(Math.random() * 100);
      const randomTime = Math.floor(Math.random() * 10 + 5);
      gotas.push({ left: randomLeft + 7, time: randomTime * 1000, id: randomLeft });
    }
  }
  return gotas;
}

export default Gotinhas;
