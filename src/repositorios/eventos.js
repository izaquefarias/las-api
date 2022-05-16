const queries = require("../infraestrutura/database/queries");

class Eventos {
  listarEventos() {
    const sql = "SELECT * FROM Eventos";
    return queries(sql);
  }
  detalharEvento(id) {
    const sql = "SELECT * FROM Eventos WHERE id = ?";
    return queries(sql, id);
  }
  incluir(evento) {
    const sql = "INSERT INTO Eventos SET ?";
    return queries(sql, evento);
  }
  alterar(id, valores) {
    const sql = "UPDATE Eventos SET ? WHERE id = ?";
    return queries(sql, [id, valores]);
  }
  excluir(id) {
    const sql = "DELETE FROM Eventos WHERE id = ?";
    return queries(sql, id);
  }
}

module.exports = new Eventos();
