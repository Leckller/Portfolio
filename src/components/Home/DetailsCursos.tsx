import { FaArrowAltCircleDown } from 'react-icons/fa';
import { ArrowDown } from '../../styles';
import useWriteText from '../../hooks/useWriteText';

function DetailsCursos() {
  const textos = {
    text: 'Cursos',
    text2: 'Cursando Desenvolvimento Web FullStack na',
    text3: 'Cursando Engenharia de Software na',
    text4: 'Em constante aprendizado com novas tecnologias como',
  };
  const textosLength = textos.text + textos.text2 + textos.text3 + textos.text4;
  const t1 = useWriteText(textosLength, 20);
  return (
    <div className="flex flex-col w-full pl-5 md:w-1/2 ">
      <h1
        className="w-96 overflow-hidden h-16 justify-start relative
    flex flex-row items-center gap-5 pt-2 border-b"
      >
        {`${textos.text.slice(0, t1)} ${t1 >= textos.text.length ? '' : '|'}`}
        {t1 >= textos.text.length && (
          <ArrowDown detail>
            <FaArrowAltCircleDown />
          </ArrowDown>
        )}
      </h1>
      <ul className="flex flex-col gap-3">
        <li className="border-b pb-5 pt-5 max-w-3xl">
          {`${textos.text2.slice(0, t1)} ${t1 >= textos.text2.length ? '' : '|'}`}
          {' '}
          {t1 >= textos.text2.length && (
            <span className="text-green-500 animate-surgir">Trybe</span>
          )}
        </li>
        <li className="border-b pb-5 pt-5 max-w-3xl">
          {`${textos.text3.slice(0, t1)} ${t1 >= textos.text3.length ? '' : '|'}`}
          {' '}
          {t1 >= textos.text3.length && (
            <span className="text-blue-500 animate-surgir">
              Estácio
            </span>
          )}
        </li>
        <li className="border-b pb-5 pt-5 max-w-3xl">
          {`${textos.text4.slice(0, t1)} ${t1 >= textos.text4.length ? '' : '|'}`}
          {' '}
          {t1 >= textos.text4.length && (
            <span className="text-red-500 animate-surgir">
              Inteligência artificial
            </span>
          )}
        </li>
      </ul>
    </div>
  );
}

export default DetailsCursos;
