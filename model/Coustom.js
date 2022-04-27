const { MySQL } = require("../db");

class Coustom {
  constructor(customer_Name, birth_Date, sid) {
    this.name = customer_Name;
    this.birth_Date = birth_Date;
  }

  save() {
    let sql = `INSERT INTO Customer(Customer_Name,Birth_Date) VALUES("${this.name}","${this.birth_Date}") `;
    return MySQL.execute(sql);
  }

  update(id) {
    let sql = `UPDATE Customer SET Customer_Name = "${this.name}", Birth_Date = "${this.birth_Date}" WHERE SID = ${id}`;
    return MySQL.execute(sql);
  }

  static delete(id) {
    const sql = `DELETE FROM Customer WHERE SID=${id};`;
    return MySQL.execute(sql);
  }

  static findAll() {
    const sql = "SELECT * FROM Customer;";
    return MySQL.execute(sql);
  }

  static findOneById(id) {
    const sql = `SELECT * FROM Customer WHERE SID=${id};`;
    return MySQL.execute(sql);
  }
}

module.exports = Coustom;
