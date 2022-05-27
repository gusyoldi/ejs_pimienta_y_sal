const express = require('express');
const app = express();
app.use(express.static('public'));

const PORT = process.env.PORT || 3000 //process.env.PORT(Busca algun puerto que esté libre) || usá el 3000. Es una Expresion booleana.

app.listen(PORT, () => {
    console.log(`Servidor levantado en puerto ${PORT}`)});  //TEMPLATE LITERALS

app.set('view engine', 'ejs');

const indexRouter = require('./routes/index.js')
app.use('/', indexRouter);




