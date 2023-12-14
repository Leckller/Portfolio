import { CardDetailsAnimation } from '../../styles';

function CardDetails({ img, title }: { img: string, title: string }) {
  return (
    <CardDetailsAnimation
      className="text-center w-32 flex flex-col items-center justify-between gap-3
      border-r h-[180px] pl-5 pr-5 md:border-none"
    >
      <h3>{title}</h3>
      <img src={ img } alt={ title } />
    </CardDetailsAnimation>
  );
}

export default CardDetails;
