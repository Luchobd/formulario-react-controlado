import React, { useState } from "react";

function Formulario() {
  /* Formulario Controlado */
  const [todo, setTodo] = useState({
    todoName: "",
    todoDescripcion: "",
    todoEstado: "Pendiente",
    todoCheck: false,
  });

  const [error, setError] = useState(false); // uso para error input vacio

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones ToDo ==================
    const { todoName, todoDescripcion } = todo;

    if (!todoDescripcion.trim() || !todoName.trim()) {
      setError(true);
      return;
    }
    setError(false);
    // =====================================

    setTodo({ todoName: "", todoDescripcion: "" });
  };

  const handleChange = (e) => {
    // setTodo({ ...todo, [e.target.name]: e.target.value });

    // De esta forma podemos configurar el uso del input "checkbox" para que funcione correctamente.
    setTodo({
      ...todo,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
      //==================================================================
    });
  };

  // Componente de Manejo del mensaje de error.
  const PintarError = () => (
    <div className="alert alert-danger">Complete todos los campos</div>
  );

  return (
    <>
      <h2>Controlado</h2>

      {error && <PintarError />}

      <form action="" onSubmit={handleSubmit}>
        <input
          name="todoName"
          type="text"
          placeholder="Enter ToDo"
          className="form-control mb-2"
          onChange={handleChange}
          value={todo.todoName}
        />
        <textarea
          name="todoDescripcion"
          className="form-control mb-2"
          placeholder="Enter description ToDo"
          onChange={handleChange}
          value={todo.todoDescripcion}
        />
        <select
          name="todoEstado"
          className="form-control mb-2"
          onChange={handleChange}
          value={todo.todoEstado}
        >
          <option value="Pendiente">Pending</option>
          <option value="Completada">Completed </option>
          <option value="Next_Day">Next Day</option>
        </select>

        <div className="form-check">
          <input
            id="flexCheckDefault"
            name="todoCheck"
            className="form-check-input"
            type="checkbox"
            checked={todo.todoCheck}
            onChange={(e) => handleChange(e)}
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            All OK
          </label>
        </div>

        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
    </>
  );
}

export default Formulario;
