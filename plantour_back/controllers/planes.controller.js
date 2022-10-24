const Plan= require ("../models/planes.model");
let response ={
    msg: "",
    exito: false
}

exports.create = function(req,res){
    let plan = new Plan({
        plan_id: req.body.plan_id,
        ciudad: req.body.ciudad,
        zona: req.body.zona,
        nombre_guia: req.body.nombre_guia,
        apellido_guia: req.body.apellido_guia,
        telefono_guia: req.body.telefono_guia,
        mail_guia: req.body.mail_guia,
        precio: req.body.precio,
        
})

    plan.save(function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al guardar el plan tour"
            res.json(response)
            return; 
        }

        response.exito = true,
        response.msg = "El plan tour se guardó correctamente"
        res.json(response)
    })
}

exports.find = function (req, res){
    Plan.find(function(err, planes){

        res.json(planes)

    })
}

exports.findOne = function(req,res){
    Plan.findOne({_id: req.params.id},function(err, plan){
        res.json(plan)

    })
}

exports.update = function(req,res){
    let plan = {
        plan_id: req.body.plan_id,
        ciudad: req.body.ciudad,
        zona: req.body.zona,
        nombre_guia: req.body.nombre_guia,
        apellido_guia: req.body.apellido_guia,
        telefono_guia: req.body.telefono,
        mail_guia: req.body.mail,
        precio: req.body.precio,
}

    Plan.findByIdAndUpdate(req.params.id,{$set: plan},function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al modificar el plan tour"
            res.json(response)
            return; 
        }

        response.exito = true,
        response.msg = "El plan se modificó correctamente"
        res.json(response)
    })
}

exports.remove = function(req,res){
    Plan.findByIdAndRemove({_id: req.params.id},function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al eliminar el plan tour"
            res.json(response)
            return; 
        }

        response.exito = true,
        response.msg = "El plan tour se eliminó correctamente"
        res.json(response)
    })
}
