const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlanesSchema = new Schema({
    plan_id:{type: String, required: true, max:60},
    ciudad:{type: String, required: true, max:40},
    zona:{type: String, required: false, max:150},
    nombre_guia:{type: String, required: true, max:60},
    apellido_guia:{type: String, required: true, max:40},
    telefono_guia:{type: String, required: true, max:15},
    mail_guia:{type: String, required: false, max:70},
    precio:{type: Number, required:true, max:1000000000},
});

module.exports = mongoose.model("planes", PlanesSchema);