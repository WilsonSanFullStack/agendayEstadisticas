"use client";
import React, { useState } from "react";
import Link from "next/link";

export const Session = () => {
  const [user, setUser] = useState({ correo: "", password: "" });
  const handleCorreo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      correo: e.target.value,
    });
  };
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      password: e.target.value,
    });
  };
  const handleSubmit = () => {
    console.log(user);
  };
  return (
    <div className="grid justify-center items-center">
      <section className="m-4 w-fit p-2">
        <form onSubmit={handleSubmit}>
          <section className="grid m-1 text-xl font-bold uppercase text-center">
            <label>correo</label>
            <input
              type="email"
              name="correo"
              onChange={handleCorreo}
              value={user.correo}
              placeholder="ejemplo@ejemplofitom"
              className="text-center text-black"
            />
          </section>
          <section className="m-1 grid text-xl font-bold uppercase text-center">
            <label>Contraseña</label>
            <input
              type="password"
              name="password"
              onChange={handlePassword}
              value={user.password}
              className="text-center text-black"
            />
          </section>

          <section>
            <button
              type="submit"
              className="bg-highlight p-1 m-2 rounded-md font-bold uppercase hover:text-black"
            >
              iniciar sesion
            </button>
          </section>
        </form>
      </section>

      <section>
        <Link href="/registro/registro">
          <button className="bg-highlight p-1 rounded-md font-bold text-xl hover:text-black">
            registrarse
          </button>
        </Link>
      </section>
    </div>
  );
};
