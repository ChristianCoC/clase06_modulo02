import app from "./src/server.js";
import dbCon from "./src/config/dbCon.js";

dbCon().then((res) => {
  app.listen(3500, () => {
    console.log("Servidor corriendo en el puerto 3500");
  });
});
