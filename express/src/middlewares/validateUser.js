// Validación de datos para el controlador de usuarios.
const validateUser = (req, res, next) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({
            error: 'El nombre es obligatorio'
        });
    } else {
        next();
    }
};

module.exports = validateUser; 