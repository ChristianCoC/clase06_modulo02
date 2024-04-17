import mongoose from "mongoose";

const dbCon = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://christianjaimesm:Jaimillo81@pruebamovies.ptvufaa.mongodb.net/dbmovies"
    );
    console.log("Base de datos conectada");
  } catch (error) {
    console.log(error);
    throw new Error("Error al iniciar la BD");
  }
};

export default dbCon;
