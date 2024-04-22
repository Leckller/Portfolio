import { CardDetailsAnimation } from '../../styles';

function CardDetails({ img, title }: { img: string, title: string }) {
  return (
    <CardDetailsAnimation
      className='flex flex-col items-center border-2 border-black rounded-md'
    >
      <h3 className=''>{title}</h3>
      <img className='h-[100px] w-[100px]' src={ img } alt={ title } />
    </CardDetailsAnimation>
  );
}

export default CardDetails;
