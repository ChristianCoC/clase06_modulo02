// Función para el controlador de usuarios.
const userController = (req, res) => {
    res.status(200).send('Recibiendo una petición de usuario');
}

module.exports = { userController }