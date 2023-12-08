import { Link } from 'react-router-dom';
import ghibli from '../assets/ghibliAnimations.png';
import Card from '../components/Projetos/Card';

function Projetos() {
  return (
    <main
      className="w-screen h-full p-10 flex flex-row
      gap-10 items-center justify-center flex-wrap
      "
    >
      <Card image={ ghibli } title="ghibli" url="" />
      <Card image={ ghibli } title="ghibli" url="" />
      <Card image={ ghibli } title="ghibli" url="" />
      <Card image={ ghibli } title="ghibli" url="" />
      <Card image={ ghibli } title="ghibli" url="" />
      <Card image={ ghibli } title="ghibli" url="" />
      <Card image={ ghibli } title="ghibli" url="" />
      <Card image={ ghibli } title="ghibli" url="" />
      <Card image={ ghibli } title="ghibli" url="" />
      <Card image={ ghibli } title="ghibli" url="" />
      <Card image={ ghibli } title="ghibli" url="" />

    </main>
  );
}

export default Projetos;
