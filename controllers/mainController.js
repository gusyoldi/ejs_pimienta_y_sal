
const {listaPlatos, about} = require('../models/data'); //DATASO



const mainController = {
    index:  (req, res) => {
        res.render('index.ejs', { about: about, menu: listaPlatos }); //MAGIA PASA 2 OBJETOS
    },
    detalle: (req, res) => {
        let plato = listaPlatos.find((plato) => plato.id == req.params.id); //LA CLAVE ESTA ACA
        res.render('detalleMenu.ejs', { plato: plato });
    }
    
}

module.exports = mainController;