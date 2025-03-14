import mysql from "mysql"

const conection = mysql.createConnection({
    host: 'mysql.railway.internal',
    port: '3306',
    user: 'root',
    password: 'OpzQfwWrWrVyfyOvZkjcpvAbvEgGbSpq',
    database: 'railway'
})

conection.connect(); 

export default conection
