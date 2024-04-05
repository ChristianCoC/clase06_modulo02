const app = require('./src/server');
const dbCon = require('../config/dbCon');

dbCon().then((res) => {
    app.listen(3000, () => {
        console.log('Servidor corriendo en el puerto 3000');
    });    
});