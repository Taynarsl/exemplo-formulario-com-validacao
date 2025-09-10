import { useState } from "react";

function Formulario(){
    const [nome,setNome] = useState('');

    return (
        <div>
            <input type="text" value={nome} onChange={(e)=>setNome(e.target.value)} placeholder="Digite seu nome." />
            <p>Você digitou: {nome}</p>
        </div>
    );
}

export default Formulario;