import { Link } from 'react-router-dom';
import { CardStyle } from '../../styles';

function Card({ image, url, title }) {
  return (
    <Link to={ url } className="overflow-hidden">
      <CardStyle
        className="w-96 p-5 gap-2 flex flex-col
      border-2 border-black rounded-md text-center
      hover:scale-110 transition-all
     "
      >
        <h1>{title}</h1>
        <img className="rounded-lg" src={ image } alt={ title } />
      </CardStyle>
    </Link>
  );
}

export default Card;
