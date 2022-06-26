const routes = require('express').Router();
const consulta=require('../configuracion/conexion_db');

routes.get('/reg',(req,res)=>{
    res.send('ruta login');
});

routes.get('/bd',(require,res)=> {
    let sql = "Select * from alumno"
    //let sql ="SELECT u.n_usuario, a.nombre FROM usuario u, alumno a, solicitud s WHERE u.id_usuario = s.id_usuario AND a.matricula = s.matricula"

    consulta.query(sql, (err, rows) => {
        if (!err) res.json(rows)
        else
            console.error(err);

    });
});


module.exports = routes;