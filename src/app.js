const express = require('express');
const fs = require('fs').promises;
const multer = require('multer');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;
const DATA_FILE = 'movies.json';

// Middleware para manejar errores globalmente
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Ocurrió un error en el servidor' });
});

// Configurar Multer para manejar la carga de archivos
const upload = multer();

// Ruta para obtener todas las películas
app.get('/movies', async (req, res) => {
    try {
        const data = await fs.readFile(DATA_FILE, 'utf8');
        const movies = JSON.parse(data);
        res.json(movies);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las películas' });
    }
});

// Ruta para agregar una nueva película
app.post('/movies', upload.single('image'), async (req, res) => {
    try {
        const { title, imageUrl, director, year, genre, duration, rate } = req.body;
        if (!title || !imageUrl || !director || !year || !genre || !duration || !rate) {
            throw new Error('Se requieren todos los campos para agregar una película');
        }

        const movie = { title, imageUrl, director, year, genre, duration, rate };

        let data = [];
        try {
            const fileData = await fs.readFile(DATA_FILE, 'utf8');
            data = JSON.parse(fileData);
        } catch (error) {
            // No hacer nada si el archivo no existe o está vacío
        }

        data.push(movie);
        await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2));

        res.status(201).json({ message: 'Película agregada correctamente', movie });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`La aplicación está escuchando en el puerto ${PORT}`);
});


