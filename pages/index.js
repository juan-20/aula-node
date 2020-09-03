const express = require('express');
const { response, request } = require('express');

const app = express();

let prod = ['suco', 3, 
            'PC', 400,
            'agua', 4,
            'linguica', 9,
            'copo', 4,
            'prato', 10,
            'cofre', 60,
            'celular', 1300,
            'tampinha', 2,
            'garfo', 4,
            'mouse', 40,
            'blusa', 120,
            'calça', 57];



app.get('/', (request, response) =>{
    return response.json(prod);
    return response.json(Bom dia);
} );

app.listen('3333', () =>{
    console.log(prod);
})