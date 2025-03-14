import express from 'express'
import bodyParser from 'body-parser'
import router from './routes/routes.js'

const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Para visualizar arquivos extensão .ejs
app.set("view engine", "ejs")

// Para utilizar arquivos estáticos na pasta "public"
app.use(express.static('public'))

// Usar o routes por último
app.use(router);

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta: ${PORT}`)
  })

export default app
