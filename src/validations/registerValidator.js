const {body, check} = require("express-validator");
module.exports = [
    check("nombre").notEmpty().withMessage("Debe ingresar su nombre"),
    check("color").notEmpty().withMessage("Debe seleccionar un color"),
    check("email").notEmpty().withMessage("Debe ingresar su email").bail().isEmail().withMessage("Ingrese un email válido")
]
