const mongoose = require("mongoose")


const bbddInit = () => {

  //realizo la conexion con la base de datos

  mongoose.connect("mongodb://localhost/GAMEINSIDER", { useNewUrlParser: true, useUnifiedTopology: true }, (err, response) => {
    if (err) {
      console.error(err, "error al conectar con la BBDD")
    } else {
      console.log("BBDD de users conectada")
    }
  })


}


module.exports = {
  bbddInit
}