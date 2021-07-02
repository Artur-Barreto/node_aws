const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.json({message: 'rota batida com sucesso'})
})

app.listen(3333)