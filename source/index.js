const express = require('express');
const morgan = require('morgan');
const app =  express();
const port= 3000;


app.use(morgan('dev'));
app.use(express.json());


app.use(require('./router/router.js'));

app.listen(port, ()=>{
    console.log( `corriendo por el puerto ${port} y en localhost`);
})