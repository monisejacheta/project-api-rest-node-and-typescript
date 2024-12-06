import express from 'express';

// Cria a instância do servidor
const server = express();

// Construindo rota GET
// A rota GET recebe uma função que manipula a requisição (req) e a resposta (res)


server.get('/', (_, res) => {
  res.send('Olá Dev!'); // Retorna 'Olá Dev'
});

// Exporta a instância do servidor
export { server };


