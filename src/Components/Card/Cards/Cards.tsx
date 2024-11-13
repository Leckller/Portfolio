import Card from '../Card/Card';
import { StyledCards } from './StyledCards';

function Cards({ title }: { title: string }) {
  return (
    <StyledCards>
      <h2>{title}</h2>
      {[].map((card) => (
        <Card />
      ))}
    </StyledCards>
  );
}

export default Cards;
