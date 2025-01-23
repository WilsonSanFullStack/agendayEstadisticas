"use client";
import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {
  const [register, setRegister] = useState(false);
  return (
    <nav className="flex justify-center items-center">
      <ul
        onMouseLeave={() => setRegister(false)}
        className="
      flex list-none justify-center items-center fixed bottom-2
      min-w-fit bg-secondary h-10
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
            ${
              register ? "block" : "hidden"
            } border-2 border-white bg-primary fixed bottom-12
            `}
          >
            <ul className="flex justify-center items-center list-none min-w-fit h-9">
              <Link href='/registro/cliente'>
              <li className="mx-2 px-1 bg-secondary">Cliente</li>
              </Link>
              <Link href='/registro/estafadores'>
              <li className="mx-2 px-1 bg-secondary">Estafador</li>
              </Link>
              <Link href='/registro/pagina'>
              <li className="mx-2 px-1 bg-secondary">Pagina</li>
              </Link>
              {/* <li className="mx-2 px-1 bg-secondary">Otros</li> */}
            </ul>
          </div>
        </li>
        <Link href="/vista/estafadores">
        <li className="mx-2">Estafadores</li>
        </Link>
        <Link href='/vista/estadisticas'>
        <li className="mx-2">Estadisticas</li>
        </Link>
        <Link href='/vista/cuentas'>
        <li className="mx-2">Cuentas</li>
        </Link>
        <li className="mx-2">
          <div>Ryuk San</div>
        </li>
      </ul>
    </nav>
  );
};
