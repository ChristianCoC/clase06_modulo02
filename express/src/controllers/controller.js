// Funciones para establecer la lógica de los controladores.
const testController = (req, res) => {
    res.status(200).send('Recibiendo una petición');
};

module.exports = { testController };