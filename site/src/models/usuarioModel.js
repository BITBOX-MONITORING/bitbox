var database = require('../database/config');

function entrar(email, senha) {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ",
    email,
    senha
  );
  var instrucao = `
        SELECT * FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
  console.log('Executando a instrução SQL: \n' + instrucao);
  return database.executar(instrucao);
}

function cadastrar(nome, cargo, email, senha, codigoPatrimonio, fkEmpresa) {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():",
    nome,
    email,
    senha,
    cargo,
    codigoPatrimonio,
    fkEmpresa
  );

  var instrucao = `EXEC cadastrar_usuario '${nome}', '${email}', '${senha}', '${cargo}', ${codigoPatrimonio}, ${fkEmpresa};`;

  console.log('Executando a instrução SQL: \n' + instrucao);

  return database.executar(instrucao);
}

function excluirFuncionario(id_funcionario) {
  console.log("ACESSEI O avaliacao MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", idEndereco);
  var instrucao = `
      DELETE FROM Funcionario WHERE id_funcionario = ${id_funcionario};
  `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function excluirMaquina(id_maquina) {
  console.log("ACESSEI O avaliacao MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", idEndereco);
  var instrucao = `
      DELETE FROM Maquina WHERE id_maquina = ${id_maquina};
  `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

module.exports = {
  entrar,
  cadastrar,
  excluirFuncionario,
  excluirMaquina
};
