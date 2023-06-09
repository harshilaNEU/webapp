require("dotenv").config();
const env = process.env;

const config = {
    db: {
        host: env.DB_HOST,
        port:3306,
        user: env.DB_USER,
        password: env.DB_PASSWORD,
        database: env.DB_NAME
    }
};

module.exports = config;
