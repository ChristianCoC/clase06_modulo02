// Definimos las rutas para los usuarios. (Crear un enrutador)
const { Router } = require('express');
const userController = require('../controllers/userController'); // Ruta del controlador
const validateUser = require('../middlewares/validateUser'); // Validación de datos

const userRouter = Router(); // Instanciamos el enrutador

userRouter.get('/', userController.getAllUsers); // Ruta del controlador para obtener todos los usuarios
userRouter.post('/', validateUser, userController.createUser); // Ruta del controlador para crear un usuario con validación de datos

module.exports = userRouter;