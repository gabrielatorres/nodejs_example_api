const express = require('express');
const morgan = require('morgan'); //
const app = express();

//#region Settings

//Variables obtenible edsde cualquier parte de la aplicación
app.set('port', process.env.port || 3000); // Validación para utilizar puertos predefinidos por el ambiente de deploy
app.set('json spaces', 2);
//#endregion

//#region Middlewares (Funciones que procesan datos antes de que el server los reciba)

app.use(morgan('combined')); //Permite ver las peticiones que llegan al servidor
app.use(express.json());    //Soporte para recepción y entendimiento de formatos JSON
app.use(express.urlencoded({extended: false})); //Soporte de formularios (sencillos)
//#endregion

//#region ROUTES
app.use(require('./routes/index'));
app.use(require('./routes/users'));

//#endregion


//#region Starting the server

app.listen(app.get('port'), () => {

    console.log(`Server on port ${app.get('port')}`);
});
//#endregion