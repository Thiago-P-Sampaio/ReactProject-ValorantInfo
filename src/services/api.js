import axios from "axios"; // importando a biblioteca do AXIOs

 const apiValoant = axios.create({
    baseURL: 'https://valorant-api.com/v1/agents?language=pt-BR'
})

export default apiValoant; // exportando minha variável que contém meu endpoint para a requisição HTTP de GET