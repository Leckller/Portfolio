import { Link } from 'react-router-dom';
import { CardStyle } from '../../styles';

function Card({ image, title }: { title: string, image: string }) {
  return (
    <Link
      to={ `/project/${title}` }
      className="overflow-hidden hover:scale-110 transition-all w-72
        border-2 border-black rounded-md h-56
      "
    >
      <CardStyle
        className="w-full h-[200px] p-5 gap-2 flex flex-col text-center justify-around
        border border-white rounded-lg
     "
      >
        <h1 className="h-[25%]">{title}</h1>
        <img className="rounded-lg h-[75%]" src={ image } alt={ title } />
      </CardStyle>
    </Link>
  );
}

export default Card;
