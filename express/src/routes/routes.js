// Definimos las rutas para la comunicación. (Crear un enrutador)
const { Router } = require('express');
const { testController } = require('../controllers/controller'); // Ruta del controlador
const userRouter = require('./userRoutes'); // Ruta de los usuarios
const postRouter = require('./postRoutes'); // Ruta de los posts

const router = Router(); // Instanciamos el enrutador

router.use('/users', userRouter);

router.use('/posts', postRouter);

router.get('/', testController);

module.exports = router;