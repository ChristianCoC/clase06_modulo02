// Función para el controlador de usuarios.
/*
const userController = (req, res) => {
    res.status(200).send('Recibiendo una petición de usuario');
}

module.exports = { userController }
*/

// Vamos a reemplazar la función anterior por otra que nos devuelva un objeto, utilizando un service.
const userService = require('../services/userService');

module.exports = {

    // Obtener todos los usuarios
    getAllUsers: async (req, res) => {
        try {
            const users = await userService.getUsers();
            res.status(200).json(users);   
        } catch (error) {
            res.status(500).json({
                error: 'Error al obtener los usuarios' 
            });
        }
    },

    // Crear un usuario
    createUser: async (req, res) => {
        const { name } = req.body;
        try {
            await userService.createUser(name);
            res.status(201).json({
                message: 'Usuario creado correctamente'
            });
        } catch (error) {
            res.status(500).json({
                error: 'Error al crear el usuario'
            });
        }
    }
};