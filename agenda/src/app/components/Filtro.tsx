import React from "react";

export default function Filtro() {
  return (
    <nav className="flex justify-center items-center m-4">
      <ul className="flex justify-center items-center fixed top-0 min-w-fit">
        <li className="m-1">opcion 1</li>
        <li className="m-1">opcion 1</li>
        <li className="m-1">opcion 1</li>
        <li className="m-1">
          <input type="text"
          className="text-center"
          placeholder="Buscar Usuario" />
        </li>
      </ul>
    </nav>
  );
}
