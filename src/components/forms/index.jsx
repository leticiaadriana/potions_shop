import { useState } from "react";
import './style.css'

function Forms() {
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [imagem, setImagem] = useState("");
    const [preco, setPreco] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        const novaPocao = {
            nome,
            descricao,
            imagem,
            preco
        };

        try {
            const response = await fetch("http://localhost:5001/api/pocoes", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(novaPocao),
            });

            if (!response.ok) {
                throw new Error("Erro ao cadastrar poção");
            }

            const data = await response.json();
            alert("Poção cadastrada com sucesso!");
            window.location.reload();
            console.log(data);

        
            setNome("");
            setDescricao("");
            setImagem("");
            setPreco("");

        } catch (error) {
            console.error(error);
            alert("Erro ao cadastrar!");
        }
    }

    return (
        <div className='forms'>
            <h2>Cadastrar nova poção</h2>

            <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column", width: "300px"}}>
                
                <label>Nome da poção:</label>
                <input
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                />

                <label>Descrição:</label>
                <input
                    type="text"
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                    required
                />

                <label>URL da imagem:</label>
                <input
                    type="text"
                    value={imagem}
                    onChange={(e) => setImagem(e.target.value)}
                    required
                />

                <label>Preço:</label>
                <input
                    type="number"
                    step="0.01"
                    value={preco}
                    onChange={(e) => setPreco(e.target.value)}
                    required
                />

                <button type="submit" className='button'>Cadastrar</button>
            </form>
        </div>
    );
}

export default Forms;
