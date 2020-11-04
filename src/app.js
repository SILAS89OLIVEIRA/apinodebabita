const express = require('express');
const routes = require('./routes');
const cors = require('cors');
//const dbConfig = require('./config/database');



require('./database');

const app = express();

app.use(express.json());

app.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin","*");
 
    app.use(cors());
    next();
})


app.use(routes);

/*



const Sequelize = require("sequelize");
const session = require("express-session");
const { MemoryStore } = require('express-session');

const SequelizeStore = require("connect-session-sequelize")(session.Store);
const sequelize = new Sequelize(dbConfig);




   






const Usuarios = sequelize.define('erp_usuario',{
    usu_cod: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    usu_senha:{
        type: Sequelize.STRING
    },
    usu_login:{
        type: Sequelize.STRING
    },
    pes_cod:{
        type: Sequelize.INTEGER
    },


})
let sess;

function extendDefaultFields(defaults, session) {
    return {
      usu_login: defaults.usu_login,
   
    };
  }

  const store = new SequelizeStore({ db: sequelize });
app.use(
  session({
    secret: "guinea pig",
    store,
    resave: true,
    proxy: true,
    saveUninitialized: true,
    checkExpirationInterval: 15,
    expiration: 24,
    extendDefaultFields: extendDefaultFields,
  }),
 
);
store.sync();




app.post('/login', async (req,res)=>{
    let usu_cod = req.body.usu_cod;
    let usu_senha = req.body. usu_senha;
    if(usu_cod == "empty" || usu_senha == "empty"){
        res.json({"MENSAGEM":"Algum campo está vazio"})
    }
    else{
        const retorno = await Usuarios.findOne({ where: { usu_cod: usu_cod, usu_senha:usu_senha } })
            if(retorno == null){
                res.json({"MENSAGEM":"Não existe essa conta"})
             }
            else{
                //res.json(Usuarios);
               
return  res.json(erp_usuario);
                sess = req.session
                sess.nivel = retorno.nivel
              

             }
            
    }})*/


app.listen(process.env.PORT || 3333);