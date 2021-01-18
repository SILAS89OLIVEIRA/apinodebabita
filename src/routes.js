const express = require('express');

const VendaController = require('./controllers/VendaController');

const VendadiaController = require('./controllers/VendadiaController');

const VendamesController = require('./controllers/VendamesController');

const EstoquetotalController = require('./controllers/EstoquetotalController');

const UsuariosController = require('./controllers/UsuariosController');

const VendestgeralController = require('./controllers/VendestgeralController');

const VendestgeraltesteController = require('./controllers/VendestgeraltesteController');

const MovlogdiaController = require('./controllers/MovlogdiaController');

const MovlogdiadfController = require('./controllers/MovlogdiadfController');

const InsertFor251Controller = require('./controllers/InsertFor251Controller');

const SelectvinculoFor251Controller = require('./controllers/SelectvinculoFor251Controller');

const SelectcodigoFor251Controller = require('./controllers/SelectcodigoFor251Controller');

const SelectrevistaFor251Controller = require('./controllers/SelectrevistaFor251Controller');

const VendestgeralitemController = require('./controllers/VendestgeralitemController');

const VendestgeralitemtamController = require('./controllers/VendestgeralitemtamController');

const Aculoja = require('./controllers/Aculoja');


const VendestgeralitemlojaController = require('./controllers/VendestgeralitemlojaController');

const ultimaatualizacao = require('./controllers/ultimaatualizacao');

const Aculojaloja = require('./controllers/Aculojaloja');

const Aculojalojaloja = require('./controllers/Aculojalojaloja');

const Aculoja4 = require('./controllers/Aculoja4');

const cpfcnpjvinculo = require('./controllers/cpfcnpjvinculo');

const todositensporcodigoloja = require('./controllers/todositensporcodigoloja');

const usuarios = require('./controllers/usuarios');

const combocodigo = require('./controllers/combocodigo');

const comboloja = require('./controllers/comboloja');

const routes = express.Router();

routes.get('/Vendas/:for_cod/:data/:data2',VendaController.index);

routes.get('/Vendasdia/:for_cod/:data',VendadiaController.index);

routes.get('/Vendasmes/:for_cod/:data/:data2',VendamesController.index);

routes.get('/Estoquetotal/:for_cod',EstoquetotalController.index);

routes.get('/erp_usuarios/:usu_login/:usu_senha',UsuariosController.index);

routes.get('/vendeestgeral/:dataini/:datafim/:codigofab',VendestgeralController.listAllProducts);

routes.get('/vendeestgeralteste/:dataini/:datafim/:codigofab',VendestgeraltesteController.listAllProducts);

routes.get('/vendeestgeralacumloja/:dataini/:datafim/:codigofab',Aculoja.listAllProducts);

routes.get('/vendeestgeralitem/:dataini/:datafim/:codigofab',VendestgeralitemController.listAllProducts);

routes.get('/vendeestgeralitemtam/:dataini/:datafim/:codigofab/:produtos_reffor',VendestgeralitemtamController.listAllProducts);

routes.get('/vendeestgeralitemloja/:dataini/:datafim/:codigofab/:produtos_reffor',VendestgeralitemlojaController.listAllProducts);

routes.get('/movlogdia',MovlogdiaController.listAllProducts);

routes.get('/ultimaatualizacao',ultimaatualizacao.listAllProducts);

routes.get('/movlogdiadf',MovlogdiadfController.listAllProducts);

routes.post('/insert/:codigo/:nome/:prinome/:comissao/:seguimento/:seguimentogestao/:revistaparalelo/:revista/:acrescimo/:vinculo/:cpfcnpj/:grupo/:ativo',InsertFor251Controller.createProduct);

routes.get('/selectvinculo/:vinculo/',SelectvinculoFor251Controller.listAllProducts);

routes.get('/selectcodigo/:codigo/',SelectcodigoFor251Controller.listAllProducts);

routes.get('/selectrevista/',SelectrevistaFor251Controller.listAllProducts);

routes.get('/vendeestgeralacumlojaloja/:dataini/:datafim/:codigofab/:lojanome',Aculojaloja.listAllProducts);

routes.get('/vendeestgeralacumlojalojaloja/:dataini/:datafim/:codigofab/:lojanome',Aculojalojaloja.listAllProducts);

routes.get('/vendeestgeralacumloja4/:dataini/:datafim/:codigofab/:lojanome/:produtos_reffor',Aculoja4.listAllProducts);

routes.get('/cpfcnpjvinculo/:forvin_cod',cpfcnpjvinculo.listAllProducts);

routes.get('/todositensporcodigoloja/:dataini/:datafim/:codigofab/',todositensporcodigoloja.listAllProducts);

routes.get('/usuarios/:usu_login/:usu_senha',usuarios.listAllProducts);

routes.get('/combocodigo/:for_cod',combocodigo.listAllProducts);

routes.get('/comboloja',comboloja.listAllProducts);




module.exports = routes;