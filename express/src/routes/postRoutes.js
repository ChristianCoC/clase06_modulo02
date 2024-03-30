// Definimos las rutas para los posts. (Crear un enrutador)
const { Router } = require('express');
const { postController } = require('../controllers/postController'); // Ruta del controlador

const postRouter = Router(); // Instanciamos el enrutador

postRouter.get('/', postController);

module.exports = postRouter;