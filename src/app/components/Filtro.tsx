import React from "react";

export default function Filtro() {
  return (
    <nav className="flex justify-center items-center m-6">
      <ul className="flex justify-center items-center fixed top-2 min-w-fit bg-secondary">
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
