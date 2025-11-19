import { useState } from "react";
import "./style.css";

function DeleteForms() {
  const [id, setID] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5001/api/pocoes/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Erro ao deletar poção");
      }
      const data = await response.json();
      alert("Poção deletada com sucesso!");
      console.log(data);
      window.location.reload();

      setID("");
    } catch (error) {
      console.error(error);
      alert("Erro ao deletar!");
    }
  }

  return (
    <div className="delete-forms">
      <h2>Deletar poção</h2>
      <form onSubmit={handleSubmit}>
        <label>ID:</label>
        <input
          type="number"
          value={id}
          onChange={(e) => setID(e.target.value)}
          placeholder="Digite o ID da poção"
          required
        />
        <button type="submit">Deletar</button>
      </form>
    </div>
  );
}

export default DeleteForms;
