class Tabelas {
  init(pool) {
    this.pool = pool;

    this.criarUsuarios();

    this.criarEventos();

    this.criarTiposVendas();

    this.criarUFs();

    this.criarMunicipios();
  }

  criarUsuarios() {
    const sql = `CREATE TABLE IF NOT EXISTS Usuarios(
      id INT AUTO_INCREMENT NOT NULL, 
      nome varchar(100) NOT NULL, 
      urlFotoPerfil text, 
      
      -- dados pessoais
      nomeCompleto VARCHAR (100),
      dataNascimento date,
      rg varchar (20), 
      cpf varchar(11),


      -- contatos
      telefone VARCHAR (14),
      celular VARCHAR (14),
      email VARCHAR (50),

      -- senha
      senha VARCHAR (10),

      -- endereco
      cep VARCHAR (8),
      endereco VARCHAR(100),
      numero INT,
      complemento VARCHAR(100),
      bairro VARCHAR (100),

      -- restricoes
      UNIQUE (nome), 
      PRIMARY KEY(id))`;

    this.pool.query(sql, (erro) => {
      if (erro) {
        console.log(erro);
      } else {
        console.log("Tabela Usuarios criada com sucesso");
      }
    });
  }
  criarEventos() {
    const sql = `CREATE TABLE IF NOT EXISTS Eventos (
        id INT AUTO_INCREMENT NOT NULL, 
        nome VARCHAR (100) NOT NULL, 
        descricao TEXT, urlfoto TEXT, 
        dataInicio DATE, dataFim DATE, 
        status ENUM ('agendado, em-andamento, finalizado'), 
        
        -- restricoes
        UNIQUE (nome), 
        PRIMARY KEY (id))`;
    this.pool.query(sql, (erro) => {
      if (erro) {
        console.log(erro);
      } else {
        console.log("Tabela de Eventos criada com sucesso!");
      }
    });
  }
  criarTiposVendas() {
    const sql = `CREATE TABLE IF NOT EXISTS TiposVendas (
        id INT NOT NULL, 
        descricao TEXT, 
        
        -- restricoes
        PRIMARY KEY (id))`;
    this.pool.query(sql, (erro) => {
      if (erro) {
        console.log(erro);
      } else {
        console.log("Tabela TiposVendas Criada com sucesso! ");
      }
    });
  }
  criarUFs() {
    const sql = `CREATE TABLE IF NOT EXISTS Uf(
        id INT NOT NULL, 
        estado varchar(50) NOT NULL, 
        sigla varchar(5) NOT NULL, 
        
        -- restricoes
        PRIMARY KEY(id))`;

    this.pool.query(sql, (erro) => {
      if (erro) {
        console.log(erro);
      } else {
        console.log("Tabela UF criada com sucesso");
      }
    });
  }

  criarMunicipio() {
    const sql = `CREATE TABLE IF NOT EXISTS Municipio(
        id INT NOT NULL, 
        UF varchar(5) NOT NULL, 
        nome varchar(100) NOT NULL, 
        
        --restricoes
        PRIMARY KEY(id))`;

    this.pool.query(sql, (erro) => {
      if (erro) {
        console.log(erro);
      } else {
        console.log("Tabela Municípios criada com sucesso");
      }
    });
  }
}

module.exports = new Tabelas();
