// Definimos las rutas para los usuarios. (Crear un enrutador)
const { Router } = require('express');
const { userController } = require('../controllers/userController'); // Ruta del controlador

const userRouter = Router(); // Instanciamos el enrutador

userRouter.get('/', userController);

module.exports = userRouter;