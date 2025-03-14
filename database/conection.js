import mysql from "mysql"

const conection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'todolist'
})

conection.connect(); 

export default conection
