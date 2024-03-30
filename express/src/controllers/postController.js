// Función para el controlador post.
const postController = (req, res) => {
    res.status(200).send('Recibiendo una petición post');
}

module.exports = { postController }