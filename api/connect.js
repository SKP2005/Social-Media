import mysql from "mysql";

export const db=mysql.createConnection({
    user: "root",
    host: "localhost",
    password:"Sanjeet@mysql",
    database:"social"
})