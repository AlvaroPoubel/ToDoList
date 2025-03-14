import conection from "../database/conection.js";

class TaskModels {

    // Criar tarefa na tabela
    create(task) {
        const sql = "INSERT INTO tasks (description) VALUE (?)"
        conection.query(sql, task)
    }

    // Listar todas as tarefas da tabela
    findAll() {
        const sql = "SELECT * FROM tasks"
        return new Promise ((resolve, reject) => {
            conection.query(sql, (error, result) => {
                if(error){
                    return reject(error)
                } else {
                    const text = JSON.parse(JSON.stringify(result))
                    return resolve(text)
                }
            })
        })
        
    }

    // Deletar uma tarefa da lista
    delete(id) {
        const sql = "DELETE FROM tasks WHERE id = ?"
        return new Promise ((resolve, reject) => {
            conection.query(sql, id, (error, result) => {
                if(error){
                    return reject(error)
                } else {
                    const text = JSON.parse(JSON.stringify(result))
                    return resolve(text)
                }
            })
        })
    }

    // Editar uma tarefa da lista
    update(task, id) {
        const sql = "UPDATE tasks SET description = ? WHERE id = ?"
        return new Promise((resolve, reject) => {
            conection.query(sql, [task, id], (error, result) => {
                if(error) return reject (error)
                const text = JSON.parse(JSON.stringify(result))
                return resolve(text)
            })
        })
    }

    findById(id){
        const sql = "SELECT * FROM tasks where id=?"
        return new Promise((resolve, reject) => {
            conection.query(sql, id, (error, result) => {
                if(error) return reject (error)
                const text = JSON.parse(JSON.stringify(result))
                const row = text[0]
                return resolve(row)
            })
        })
    }

}

export default new TaskModels()

