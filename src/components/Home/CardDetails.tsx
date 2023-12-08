function CardDetails({ img, title }: { img: string, title: string }) {
  return (
    <div className="text-center flex flex-col items-center justify-between gap-3 w-1/3">
      <h3>{title}</h3>
      <img src={ img } alt={ title } />
    </div>
  );
}

export default CardDetails;
