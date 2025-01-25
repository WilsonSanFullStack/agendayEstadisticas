import { Session } from "./components/Session";

export default function Home() {
  return (
    <div className="text-center justify-center items-center m-5">
      <h1 className="text-6xl">Bienvenidos</h1>
      <p>
        Esta es una pagina creada con el fin de llevar un registro de los
        usuarios mas frecuentes de cada una de las paginas a las cuales usted le
        invierte tiempo y genera ingresos
      </p>
      <h3>Que encontraras en esta pagina</h3>
      <h4>
        Tienes 4 opciones generales de usos de esta pagina los cuales son:{" "}
      </h4>
      <ul className="grid grid-cols-4 text-justify">
        <li className="m-2 p-1">
          <h3 className="flex justify-center items-center text-xl font-bold uppercase">
            1. registros
          </h3>
          <ol>
            <li>1.1 registrar sus clientes</li>
            <p className="p-3">
              Los cuales solo vera usted ya que estan enlazados a sus
              credenciales de inicio de session y nadie mas podra ver los
              mismos.
            </p>

            <li>1.2 Registar los estafadores</li>
            <p className="p-3">
              Estos usuarios/estafadores seran vistos por todos los usuarios de
              esta pagian tambien se vera informacion de quien lo registro o
              quien lo reporto y el monto por el cual fue reportado como
              estafador este ultimo dato "el monto es opcional".
            </p>
            <li>1.3 Registro de paginas</li>
            <p className="p-3">
              Esta tambien sera publica para todos los usuarios para asi no
              sobre cargar con el mismo dato.
            </p>
          </ol>
        </li>
        <li className="m-2 p-1 text-center">
          <h3 className="flex justify-center items-center text-xl font-bold uppercase">
            2. Estafadores
          </h3>
          <ol>
            <li>2.1 filtros por paginas</li>
            <li>2.2 buscar usuario por nombre</li>
          </ol>
        </li>
        <li className="m-2 p-1 text-center">
          <h3 className="flex justify-center items-center text-xl font-bold uppercase">
            3. Estadisticas
          </h3>
          <ol>
            <li>
              3.1 Podra registar sus ingresos diarios por cada pagina que maneje
            </li>
          </ol>
        </li>

        <li className="m-2 p-1 text-center">
          <h3 className="flex justify-center items-center text-xl font-bold uppercase">
            4. Cuentas
          </h3>
          <ol>
            <li>4.1 vizualizacion de los ingresos que registre</li>
          </ol>
        </li>
      </ul>
      <Session />
    </div>
  );
}
