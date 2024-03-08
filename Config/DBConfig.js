const db = {
    host: "localhost",
    user: "root",
    password: "Vivek@0603",
    database: "ORM_DataBase",
    dialect: "mysql",

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};

module.exports = db;