import React from "react";
import { useRef } from "react";

function FormNoControlado() {
  /* Formulario No Controlado */
  // cuando se usa el valor de la variable "formulario se le debe agregar un .current para que pueda funcionar."
  const formulario = useRef(null); // cuando se usa el valor de la variable "formulario se le debe agregar un .current para que pueda funcionar."

  const handleSubmit = (e) => {
    e.preventDefault();

    const datos = new FormData(formulario.current);

    // Con datos podemos ver todos los valores del formulario y con "datos.entries nos da la respuesta de todos los inputs del formulario."
    // console.log(...datos.entries());

    const objetoDatos = Object.fromEntries([...datos.entries()]);
    // console.log(objetoDatos);

    // validacion de los inputs vacios
    const { TodoDescripcion, todoEstado, todoName } = objetoDatos;
    if (!TodoDescripcion.trim() || todoName.trim()) {
      console.log("Vacio");
      return;
    }
  };

  /* Se utiliza la propiedad "defaultValue" cuando se trabajan con formularios "desordenados", cuando se utilizan los formularios ordenados, se usa "value" como de costumbre.  */

  return (
    <>
      <h2>No Controlado</h2>
      <form action="" ref={formulario} onSubmit={handleSubmit}>
        <input
          name="todoName"
          type="text"
          placeholder="Ingrese ToDo"
          className="form-control mb-2"
          defaultValue="Tarea #01"
        />
        <textarea
          name="TodoDescripcion"
          className="form-control mb-2"
          placeholder="Ingrese descripcion del ToDo"
          defaultValue="Descripcion de la Tarea #01"
        />
        <select
          name="todoEstado"
          className="form-control mb-2"
          defaultValue="pendiente"
        >
          <option value="">Pendiente </option>
          <option value="">Completada </option>
        </select>
        <button className="btn btn-primary">Agregar</button>
      </form>
    </>
  );
}

export default FormNoControlado;
