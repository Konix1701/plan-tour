const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TuristasSchema = new Schema({
    username:{type: String, required: true, max:60},
    pass:{type: String, required: true, max:180},
    nombre_turista:{type: String, required: true, max:60},
    apellido_turista:{type: String, required: true, max:40},
    telefono:{type: String, required: true, max:15},
    mail:{type: String, required: false, max:70},
});

module.exports = mongoose.model("turistas", TuristasSchema); 