const express = require('express');
//Crear el servidor de express
const app = express();

//Rutas
app.get('/', (req, res)=>{
    console.log('Se requiere /');
    res.json({
        ok: true
    })
})

//Escuchar peticiones
app.listen(3001,()=>{
    console.log(`Servidor corriendo en puerto ${3001}`);
})