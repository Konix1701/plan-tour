const Turista= require ("../models/turistas.model");
let response ={
    msg: "",
    exito: false
}

exports.create = function(req,res){
    let turista = new Turista({
        username: req.body.username,
        pass: req.body.pass,
        nombre_turista: req.body.nombre_turista,
        apellido_turista: req.body.apellido_turista,
        telefono: req.body.telefono,
        mail: req.body.mail,
        
})

    turista.save(function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al guardar el turista"
            res.json(response)
            return; 
        }

        response.exito = true,
        response.msg = "El turista se guardó correctamente"
        res.json(response)
    })
}

exports.find = function (req, res){
    Turista.find(function(err, turista){

        res.json(turista)

    })
}

exports.findOne = function(req,res){
    Turista.findOne({_id: req.params.id},function(err, turista){
        res.json(turista)

    })
}

exports.update = function(req,res){
    let turista = {
        username: req.body.username,
        pass: req.body.pass,
        nombre_turista: req.body.nombre_turista,
        apellido_turista: req.body.apellido_turista,
        telefono: req.body.telefono,
        mail: req.body.mail,
}

    Turista.findByIdAndUpdate(req.params.id,{$set: turista},function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al modificar el turista"
            res.json(response)
            return; 
        }

        response.exito = true,
        response.msg = "El turista se modificó correctamente"
        res.json(response)
    })
}

exports.remove = function(req,res){
    Turista.findByIdAndRemove({_id: req.params.id},function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al eliminar el turista"
            res.json(response)
            return; 
        }

        response.exito = true,
        response.msg = "El turista se eliminó correctamente"
        res.json(response)
    })
}
