import TaskModels from "../models/TaskModels.js";

class TaskController {

    async index(req, res) {
        try {
          const row = await TaskModels.findAll()
          res.render("index", {row})
        } catch (error) {
          res.send("Houve um erro, não foi possível acessar a página");
          console.log(error);
        }
      }

    async store(req, res) {
      const task = req.body.tarefa
      try {
        TaskModels.create(task)
        res.redirect('/');
      } catch(error) {
        res.send("Houve um erro, não foi possível cadastrar")
        console.log(error)
      }
    }
    
    async delete(req, res) {
      const task = req.params.id
      try {
        TaskModels.delete(task)
        res.redirect('/');
      } catch(error) {
        res.send("Houve um erro, não foi possível deletar")
        console.log(error)
      }
    }

    async update(req, res) {
        const id = req.params.id
        const task = req.body.tarefa
        try {
         await TaskModels.update(task, id)
          res.redirect('/');
        }catch(error) {
          res.send("Houve um erro, não foi possível editar")
          console.log(error)
        }
    }

    async show(req, res) {
       const id = req.params.id
       try {
        const row = await TaskModels.findById(id)
        res.render("editarTarefa", {row});
       }catch(error) {
        res.send(error)
       }
    

    };


}

export default new TaskController()