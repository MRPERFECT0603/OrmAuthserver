const dbConfig = require("../Config/DBConfig");
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
    dbConfig.database,
    dbConfig.user,
    dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acuire,
        idle: dbConfig.pool.idle
    }
}
);

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((err) => {
        console.error('Unable to connect to the database:', err);
    });
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.users = require("./userModel")(sequelize, DataTypes);

db.sequelize.sync({ force: false })
    .then(() => {
        console.log("Database Sync Done!")
    })
    .catch((err) => {
        console.log("Error:" + err);
    })

module.exports = db; 