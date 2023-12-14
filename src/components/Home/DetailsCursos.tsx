function DetailsCursos() {
  return (
    <div className="flex flex-col w-full md:w-1/2 ">
      <h1
        className="w-96 overflow-hidden h-16 justify-start relative
    flex flex-row items-center gap-5"
      >
        Cursos

      </h1>
      <div className="p-5">
        <h2>
          Desenvolvimento Web FullStack na
          {' '}
          <span className="text-green-500">Trybe</span>
        </h2>
        <h2>
          Cursando Engenharia de Software na
          {' '}
          <span className="text-blue-500">
            Estácio
          </span>
        </h2>
        <h2>
          Em constante aprendizado com novas tecnologias como
          {' '}
          <span className="text-red-500">
            Inteligência artificial
          </span>
        </h2>
      </div>
    </div>
  );
}

export default DetailsCursos;
