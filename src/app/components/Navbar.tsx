"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const [register, setRegister] = useState(false);
  const pathname = usePathname();

  // Rutas donde no se renderiza la Navar
  const hideNavbarRoutes = ["/", "/registro/registro"];
  const shouldShowNavBar = !hideNavbarRoutes.includes(pathname);
  //si la ruta actual esta en la lista, no se renderiza nada
  //! funciona la logina siguiente descomentar el if al completar el desarrollo
  // if (hideNavbarRoutes.includes(pathname)) {
  //   return null;
  // }

  return (
    <nav className="flex justify-center items-center">
      <ul
        onMouseLeave={() => setRegister(false)}
        className="
      flex list-none justify-center items-center fixed bottom-2
      min-w-fit bg-primary h-10 text-black
      "
      >
        <Link href="/">
          <li className="mx-2  px-1 ">Home</li>
        </Link>
        <li className="mx-2 flex justify-center items-center">
          <button
            onClick={() => setRegister(!register)} //toggle register
          >
            registro
          </button>
          {/*menu register */}
          <div
            onMouseLeave={() => setRegister(!register)}
            className={`
            ${register ? "block" : "hidden"}  bg-secondary fixed bottom-12
            `}
          >
            <ul className="flex justify-center items-center list-none min-w-fit h-9">
              <Link href="/registro/cliente">
                <li className="mx-2 px-1 ">Cliente</li>
              </Link>
              <Link href="/registro/estafadores">
                <li className="mx-2 px-1 ">Estafador</li>
              </Link>
              <Link href="/registro/pagina">
                <li className="mx-2 px-1 ">Pagina</li>
              </Link>
              {/* <li className="mx-2 px-1 bg-secondary">Otros</li> */}
            </ul>
          </div>
        </li>
        <Link href="/vista/estafadores">
          <li className="mx-2">Estafadores</li>
        </Link>
        <Link href="/vista/estadisticas">
          <li className="mx-2">Estadisticas</li>
        </Link>
        <Link href="/vista/cuentas">
          <li className="mx-2">Cuentas</li>
        </Link>
        <li className="mx-2">
          <div>Ryuk San</div>
        </li>
      </ul>
    </nav>
  );
};
