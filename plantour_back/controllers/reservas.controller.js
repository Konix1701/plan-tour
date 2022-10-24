const Reserva= require ("../models/reservas.model");
let response ={
    msg: "",
    exito: false
}

exports.create = function(req,res){
    let reserva = new Reserva({
        username: req.body.username,
        plan_id: req.body.plan_id,
        cantidad_personas: req.body.cantidad_personas,
        fecha_inicio: req.body.fecha_inicio,
        fecha_fin: req.body.fecha_fin,
        precio: req.body.precio,
})

    reserva.save(function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al guardar la reserva del tour"
            res.json(response)
            return; 
        }

        response.exito = true,
        response.msg = "La reserva se guardó correctamente"
        res.json(response)
    })
}

exports.find = function (req, res){
    Reserva.find(function(err, reservas){

        res.json(reservas)

    })
}

exports.findOne = function(req,res){
    Reserva.findOne({_id: req.params.id},function(err, reserva){
        res.json(reserva)

    })
}

exports.update = function(req,res){
    let reserva = {
        username: req.body.username,
        plan_id: req.body.plan_id,
        cantidad_personas: req.body.cantidad_personas,
        fecha_inicio: req.body.fecha_inicio,
        fecha_fin: req.body.fecha_fin,
        precio: req.body.precio,
}

    Reserva.findByIdAndUpdate(req.params.id,{$set: reserva},function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al modificar la reserva del tour"
            res.json(response)
            return; 
        }

        response.exito = true,
        response.msg = "La reserva se modificó correctamente"
        res.json(response)
    })
}

exports.remove = function(req,res){
    Reserva.findByIdAndRemove({_id: req.params.id},function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al eliminar la reserva"
            res.json(response)
            return; 
        }

        response.exito = true,
        response.msg = "La reserva se eliminó correctamente"
        res.json(response)
    })
}
