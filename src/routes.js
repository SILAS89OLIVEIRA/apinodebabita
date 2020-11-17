const express = require('express');

const VendaController = require('./controllers/VendaController');

const VendadiaController = require('./controllers/VendadiaController');

const VendamesController = require('./controllers/VendamesController');

const EstoquetotalController = require('./controllers/EstoquetotalController');

const UsuariosController = require('./controllers/UsuariosController');

const VendestgeralController = require('./controllers/VendestgeralController');

const MovlogdiaController = require('./controllers/MovlogdiaController');

const MovlogdiadfController = require('./controllers/MovlogdiadfController');

const InsertFor251Controller = require('./controllers/InsertFor251Controller');

const SelectvinculoFor251Controller = require('./controllers/SelectvinculoFor251Controller');

const SelectcodigoFor251Controller = require('./controllers/SelectcodigoFor251Controller');

const SelectrevistaFor251Controller = require('./controllers/SelectrevistaFor251Controller');

const routes = express.Router();

routes.get('/Vendas/:for_cod/:data/:data2',VendaController.index);

routes.get('/Vendasdia/:for_cod/:data',VendadiaController.index);

routes.get('/Vendasmes/:for_cod/:data/:data2',VendamesController.index);

routes.get('/Estoquetotal/:for_cod',EstoquetotalController.index);

routes.get('/erp_usuarios/:usu_login/:usu_senha',UsuariosController.index);

routes.get('/vendeestgeral/:dataini/:datafim/:codigofab',VendestgeralController.listAllProducts);

routes.get('/movlogdia',MovlogdiaController.listAllProducts);

routes.get('/movlogdiadf',MovlogdiadfController.listAllProducts);

routes.post('/insert/:codigo/:nome/:prinome/:comissao/:seguimento/:seguimentogestao/:revistaparalelo/:ativo/:revista/:acrescimo/:cpfcnpj/:vinculo/:grupo',InsertFor251Controller.createProduct);

routes.get('/selectvinculo/:vinculo/',SelectvinculoFor251Controller.listAllProducts);

routes.get('/selectcodigo/:codigo/',SelectcodigoFor251Controller.listAllProducts);

routes.get('/selectrevista/',SelectrevistaFor251Controller.listAllProducts);


module.exports = routes;