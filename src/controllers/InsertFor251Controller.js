const db251 = require("../config/database251");

exports.createProduct  = async (req, res) => {
 const codigo = req.params.codigo;
 const nome = req.params.nome;
 const seguimento = req.params.seguimento;
 const revistaparalelo = req.params.revistaparalelo;
 const revista = req.params.revista;
 const comissao = req.params.comissao;
 const prinome = req.params.prinome;
 const ativo = req.params.ativo;
 const acrescimo = req.params.acrescimo;
 const seguimentogestao = req.params.seguimentogestao;
 const vinculo = req.params.vinculo;
 const cpfcnpj = req.params.cpfcnpj;
 const grupo = req.params.grupo;
 
var anome = "'"+nome.toString()+"'";
var aprinome = "'"+prinome.toString()+"'";
var acpfcnpj = "'"+cpfcnpj.toString()+"'";



 const rows = await db251.query('INSERT INTO erp_fabricantes(fabricantes_id, fabricantes_nome,fabricantes_nomfant,fabricantes_comissao, fabricantes_segmento_id,fabricantes_segmento_id_gestao,fabricantes_revista,for_ativo,fabricantes_revistas_id,fabricantes_bonus) VALUES ('+codigo+','+anome+','+aprinome+','+comissao+','+seguimento+','+seguimentogestao+','+revistaparalelo+','+ativo+','+revista+','+acrescimo+')');
 const rows2 = await db251.query('INSERT INTO erp_fabricantes_vinculado(fv_vinculacao_id, fv_fabricantes_id,fv_nome,fv_fabricantes_cnpj) VALUES ('+vinculo+','+codigo+','+aprinome+','+acpfcnpj+')');  
 const rows3 = await db251.query('INSERT INTO erp_fabricante_grupo(fg_grupo_id, fg_fabricantes_id) VALUES ('+grupo+','+codigo+')');  
 
 
 
 
 
 
 return res.json(rows.rows);
  };
