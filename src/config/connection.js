import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

let dbConfig;

dbConfig = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  charset: "utf8mb4",
};

const dbPool = mysql.createPool(dbConfig);

dbPool.getConnection((err, connection) => {
  if (err) {
    console.error("Error connecting to database:", err);
    return;
  }
  console.log("Connected to database");
  connection.release();
});

export default dbPool.promise();
