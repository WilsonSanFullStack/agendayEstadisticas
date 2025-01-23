export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-6xl">Bienvenidos</h1>
      <p>
        Esta es una pagina creada con el fin de llevar un registro de los
        usuarios mas frecuentes de cada una de las paginas a las cuales usted le
        invierte tiempo y genera ingresos
      </p>
      <h3>Que encontraras en esta pagina</h3>
      <ul>
        <h4>
          Tienes 4 opciones generales de usos de esta pagina los cuales son:{" "}
        </h4>
        <li>
          1. registros
          <ol>
            <li>1.1 registrar sus clientes</li>
            <p>
              Los cuales solo vera usted ya que estan enlazados a sus
              credenciales de inicio de session y nadie mas podra ver los
              mismos.
            </p>

            <li>1.2 Registar los estafadores</li>
            <p>
              Estos usuarios/estafadores seran vistos por todos los usuarios de
              esta pagian tambien se vera informacion de quien lo registro o
              quien lo reporto y el monto por el cual fue reportado como
              estafador este ultimo dato "el monto es opcional".
            </p>
            <li>1.3 Registro de paginas</li>
            <p>
              Esta tambien sera publica para todos los usuarios para asi no
              sobre cargar con el mismo dato.
            </p>
          </ol>
        </li>
        <li>2. Estafadores
        </li>
      </ul>
    </div>
  );
}
