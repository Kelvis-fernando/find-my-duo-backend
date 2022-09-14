import express from "express"

const app = express()

app.get('/ads', (req, res) => {
    console.log('Acessou ads')
    return res.json([
        {id:1, name: 'Anuncio 1'},
        {id:2, name: 'Anuncio 2'},
        {id:3, name: 'Anuncio 3'},
        {id:5, name: 'Anuncio 5'},
    ])
});

app.listen(3333)