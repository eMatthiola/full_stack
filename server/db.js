const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "111",
    host: "localhost",
    port: "5432",
    database: "prentodo"

});

module.exports = pool;