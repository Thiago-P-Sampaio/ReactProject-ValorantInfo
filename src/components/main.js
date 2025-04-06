import React, { useState, useEffect, use } from "react"; // Import do React, meu hook de estado e de renderização da página
import apiValoant from "../services/api"; // import do meu service
import '../styles/style.css'; // importando os meus estilos

export default function ValorantInfo(){
    
    const [ agentes, setAgentes ] = useState([]) // inicializando meu hook que irá receber um objeto como um array vazio, a príncipio.
    

    useEffect(() => { 

    async function  buscarAgentes() { // definindo minha função assíncrona
        try{
            const response =  await apiValoant.get(); // realizando o meu 'FETCH'
            // Definindo o resultado na minha var 'agentes' com a função 'setAgentes'
            setAgentes(response.data.data) 
            //                      ↓       
            // 'data.data' ? || Simplesmente porque nesta API o objeto principal, ou seja os agentes, estão em 'response.data.data' || 'response.data' traria todas as informações, inclusive desnecessárias.
            // Portanto eu preciso acessar o array onde está o conteúdo que eu busco

        } catch(error){ // tratando erros
            console.error("Error ao realizar a busca, tente novamente mais tarde", error)
        } 


       
    }

        buscarAgentes() 
    }, []); // definido um parâmetro '[]' para bloquear as renderizações múltiplas do 'useEffect'


    return( // construindo o meu 'HTML'
        <div className="container"> 
            <h1>Valorant Info</h1>
            <div className="container-body">
                { agentes.map((agente) => ( // Mapeando cada objeto, para expor em cards cada item dessa lista
                    <div key={ agente.uuid } className="card-agentes">  
                        <img src={ agente.fullPortrait } alt= {  agente.fullPortrait }  className="img-card"/>
                        <div className="info-agente">
                            <h2> { agente.displayName }</h2>
                            <h3>Descrição</h3>
                            <p> { agente.description }</p>
                            <h3>{ agente.role?.displayName }</h3>
                            <img src={ agente.role?.displayIcon }  alt={ agente.role?.displayIcon } className="img-card-2"/>
                            <p> { agente.role?.description }</p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}

