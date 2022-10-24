const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReservasSchema = new Schema({
    username:{type: String, required: true, max:60},
    plan_id:{type: String, required: true, max:60},
    cantidad_personas:{type: String, required: true, max:40},
    fecha_inicio:{type: Date, required: true},
    fecha_fin:{type: Date, required: true},
    precio:{type: Number, required:true, max:1000000000},
});

module.exports = mongoose.model("reservas", ReservasSchema);