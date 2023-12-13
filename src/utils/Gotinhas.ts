import { GotaType } from '../types';

function Gotinhas(numGotas: number = 10) {
  const gotas:GotaType[] = [];
  for (let i = 0; gotas.length <= numGotas; i++) {
    if (gotas.length < 10) {
      gotas.push({ left: i === 0 ? 10 : i * 10,
        time: Math.floor(Math.random() * 4000 + 2000),
        id: i });
    } else {
      const randomLeft = Math.floor(Math.random() * 100);
      const randomTime = Math.floor(Math.random() * 10000 + 2000);
      gotas.push({ left: randomLeft + 5, time: randomTime, id: i });
    }
  }
  return gotas;
}

export default Gotinhas;
