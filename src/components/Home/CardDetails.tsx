import { DivButtonDetails } from '../../styles';

function CardDetails({ img, title }: { img: string, title: string }) {
  return (
    <DivButtonDetails
      className="text-center w-32 flex flex-col items-center justify-between gap-3"
    >
      <h3>{title}</h3>
      <img src={ img } alt={ title } />
    </DivButtonDetails>
  );
}

export default CardDetails;
