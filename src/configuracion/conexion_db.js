const mysqle=require("mysql");
const conecta = mysqle.createConnection({
    host:'localhost',
    user:'root',
    password:'12345',
    port:3306,
    database:'usuarios',
})
conecta.connect()
    module.exports=conecta;