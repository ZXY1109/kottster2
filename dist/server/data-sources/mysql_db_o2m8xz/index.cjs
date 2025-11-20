"use strict";
const server = require("@kottster/server");
const knex = require("knex");
const client = knex({
  client: "mysql2",
  connection: {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "YINGying1109",
    database: "kottster"
  }
});
const index = new server.KnexMysql2Adapter(client);
module.exports = index;
