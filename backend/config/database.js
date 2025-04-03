const config = require("./index.js");

const db = config.db;
const username = db.username;
const password = db.password;
const database = db.database;
const host = db.host;
// const prod_url = process.env.DATABASE_URL;

// console.log('db', db);

module.exports = {
  development: {
    username: username,
    password: password,
    database: database,
    host: host,
    // port: port,
    dialect: "postgres",
    seederStorage: "sequelize",
  },
  production: {
    use_env_variable: "DATABASE_URL",
    dialect: "postgres",
    seederStorage: "sequelize",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};
