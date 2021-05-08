import React from 'react';
import FormRegister from './../Componentes/FormRegister';
import './style.css'
const Cadastro = () => {
    return(
        <div className="hero-cadastro">
            <div className="cadastro-esquerda"></div>
            <div className="cadastro-form">
                <h1 className="title">Cadastro</h1>
                <FormRegister/>
            </div>
        </div>
    );
}

export default Cadastro;