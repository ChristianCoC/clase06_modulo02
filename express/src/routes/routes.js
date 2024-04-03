// Definimos las rutas para la comunicación. (Crear un enrutador)
const { Router } = require('express');
const { testController } = require('../controllers/controller'); // Ruta del controlador
const userRouter = require('./userRoutes'); // Ruta de los usuarios
const moviesRouter = require('./moviesRoute'); // Ruta de las películas

const router = Router(); // Instanciamos el enrutador

router.use('/users', userRouter);
router.use('/movies', moviesRouter);

router.get('/', testController);

module.exports = router;