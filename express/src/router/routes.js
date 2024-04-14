// Definimos las rutas para la comunicación. (Crear un enrutador)

import { Router } from 'express';
import testController from '../controllers/testController.js'; // Ruta del controlador
//const userRouter = require('./userRoutes'); // Ruta de los usuarios
//const moviesRouter = require('./moviesRoute'); // Ruta de las películas

const router = Router(); // Instanciamos el enrutador

//router.use('/users', userRouter);
//router.use('/movies', moviesRouter);

router.get('/', testController);

export default router;