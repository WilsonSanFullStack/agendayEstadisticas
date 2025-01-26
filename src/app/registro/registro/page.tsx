"use client";
import React, { useState } from "react";

export default function page() {
  const [user, setUser] = useState({
    nombre: "",
    apellido: "",
    celular: "",
    correo: "",
    password: "",
    passwordConfirmacion: "",
    studio: "",
    referido: "",
  });
  return (
    <div>
      <form>
        <section>
          <section>
            <label>nombre</label>
            <input type="text" />
          </section>
          <section>
            <label>apellido</label>
            <input type="text" />
          </section>
          <section>
            <label>celular</label>
            <input type="text" />
          </section>
          <section>
            <label>correo</label>
            <input type="text" />
          </section>
          <section>
            <label>constraseña</label>
            <input type="text" />
          </section>
          <section>
            <label>confirme la Contraseña</label>
            <input type="text" />
          </section>
          <section>
            <label>studio</label>
            <input type="text" />
          </section>
          <section>
            <label>referido por</label>
            <input type="text" />
          </section>
          <section>
            <button>registrar</button>
            <button>cancelar</button>
          </section>
        </section>
      </form>
    </div>
  );
}
