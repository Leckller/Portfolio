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
  const t1 = useWriteText(textos.text, 40);
  const t2 = useWriteText(textos.text2, 40);
  const t3 = useWriteText(textos.text3, 40);
  const t4 = useWriteText(textos.text4, 40);
  return (
    <div className="flex flex-col w-full pl-5 md:w-1/2 ">
      <h1
        className="w-96 overflow-hidden h-16 justify-start relative
    flex flex-row items-center gap-5 pt-2"
      >
        {`${textos.text.slice(0, t1)} ${t1 >= textos.text.length ? '' : '|'}`}
        {t1 >= textos.text.length && (
          <ArrowDown detail>
            <FaArrowAltCircleDown />
          </ArrowDown>
        )}
      </h1>
      <div className="">
        <h2>
          {`${textos.text2.slice(0, t2)} ${t2 >= textos.text2.length ? '' : '|'}`}
          {' '}
          {t2 >= textos.text2.length && (
            <span className="text-green-500 animate-surgir">Trybe</span>
          )}
        </h2>
        <h2>
          {`${textos.text3.slice(0, t3)} ${t3 >= textos.text3.length ? '' : '|'}`}
          {' '}
          {t3 >= textos.text3.length && (
            <span className="text-blue-500 animate-surgir">
              Estácio
            </span>
          )}
        </h2>
        <h2>
          {`${textos.text4.slice(0, t4)} ${t4 >= textos.text4.length ? '' : '|'}`}
          {' '}
          {t4 >= textos.text4.length && (
            <span className="text-red-500 animate-surgir">
              Inteligência artificial
            </span>
          )}
        </h2>
      </div>
    </div>
  );
}

export default DetailsCursos;
