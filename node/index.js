const express = require("express");
const mysql = require("mysql");

const app = express();

const dbConfig = {
  host: "desafio-node-db",
  user: "root",
  password: "root",
  database: "nodedb",
};

initDB();

function initDB() {
  const connection = mysql.createConnection(dbConfig);

  connection.query(
    `INSERT INTO people(name) VALUES ('Fulano'), ('Beltrano'), ('Ciclano');`
  );

  connection.end();
}

app.get("/", async (_, res) => {
  const connection = mysql.createConnection(dbConfig);

  connection.query(`SELECT name FROM people`, (err, data) => {
    if (err) {
      console.error(err);

      return res.sendStatus(500);
    }

    const list = `<ul>${data
      .map((item) => "<li>" + item.name + "</li>")
      .join("\n")}</ul>`;

    res.send("<h1>Full Cycle Rocks!</h1>\n" + list);
  });

  connection.end();
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
