import { Link } from 'react-router-dom';
import { CardStyle } from '../../styles';

function Card({ image, url, title }) {
  return (
    <Link
      to={ url }
      className="overflow-hidden hover:scale-110 transition-all w-72
        border-2 border-black rounded-md h-56
      "
    >
      <CardStyle
        className="w-full h-full p-5 gap-2 flex flex-col text-center justify-around
     "
      >
        <h1>{title}</h1>
        <img className="rounded-lg" src={ image } alt={ title } />
      </CardStyle>
    </Link>
  );
}

export default Card;
