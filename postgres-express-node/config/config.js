require("dotenv").config();

module.exports = {
  development: {
    use_env_variable: "DATABASE_URL",
    url: process.env.DATABASE_URL,
    dialect: "postgres",
    // logging: console.log,
  },
  production: {
    use_env_variable: "DATABASE_URL",
    url: process.env.DATABASE_URL,
    dialect: "postgres",
  },
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
};
