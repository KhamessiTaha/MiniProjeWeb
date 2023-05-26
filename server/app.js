const mysql = require("mysql");
const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");

// connexion to MySQL
const db = mysql.createConnection({
  host: "localhost",
  port: '3307',
  user: "root",
  password: "",
  database: "petmatchdb",
  insecureAuth: true
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySql Connected...");
});

const app = express();

app.use(bodyparser.json());

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions)); // Use this after the variable declaration

app.listen(5000, () => {
  console.log("Server started on port 5000");
});

app.get("/createdb", (req, res) => {
  let sql = "CREATE DATABASE IF NOT EXISTS indigenes";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Database created...");
  });
});

app.get("/createtable", (req, res) => {
  let sql =
    "CREATE TABLE IF NOT EXISTS client(id_c int AUTO_INCREMENT, nom_c VARCHAR(255),prenom_c VARCHAR(255), email_c VARCHAR(255), mot_de_passe_c VARCHAR(255), pays_c VARCHAR(255), PRIMARY KEY(id_c))";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("table created...");
  });
});

app.get("/getAll", (req, res) => {
  let sql = `SELECT * FROM user where username='$username' and password='$password`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

app.get("/getUser", (req, res) => {
  let form = req.body;
  let sql = `SELECT * FROM user where username='${form.username}' and password='${form.password}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

app.get("/getDelegation", (req, res) => {
  let sql = `SELECT DISTINCT id_g, libelle, id_d, libelle_d FROM gouvernorat JOIN delegation USING (id_g)`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

app.get("/getproject", (req, res) => {
  let sql = `SELECT projet.id_P, client.nom_c, projet.titre, projet.subtitle ,projet.categorie ,projet.id_g, gouvernorat.libelle, projet.img_P,projet.decription,projet.id_d ,delegation.libelle_d FROM projet,client,delegation,gouvernorat where projet.id_c = client.id_c AND projet.id_d = delegation.id_d AND projet.id_g = gouvernorat.id_g`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);

    res.send(result);
  });
});

app.post("/createUser", (req, res) => {
  console.log(req.body);
  let form = req.body;
  let sql = `INSERT INTO user(phone_num,username,email_adress,password) VALUES ('${form.phone_num}', '${form.username}', '${form.email_adress}', '${form.password}')`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.json("User created...");
  });
});

app.post("/addPost", (req, res) => {
  console.log(req.body);
  let form = req.body;
  let sql = `INSERT INTO covoiturage (idCovoiturage, capacity, date_cov, point_depart, point_arrive, baggage, voiture_type, client_idClient) VALUES (NULL, '2', '2023-04-01 09:20:25', '${form.start}', '${form.end}', '1', 'Honda Civic RS', '11');`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.json("added post !");
  });
});

app.post("/contact", (req, res) => {
  console.log(req.body);
  let form = req.body;
  let sql = `INSERT INTO contact(full_name,email,message) VALUES ('${form.fname}', '${form.email}', '${form.message}')`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Sent mail contact...");
  });
});

app.post("/createProject", (req, res) => {
  console.log(req.body);
  let form = req.body;
  let sql = `INSERT INTO projet(titre,subtitle,categorie,gouvernorat,delegation,img_P,description) VALUES ('${form.titre}', '${form.subtitle}', '${form.category}', '${form.gouv}', '${form.deleg}', '${form.img}', '${form.description}')`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("User created...");
  });
});
