// Servidor
const express = require('express')
const server = express()

const { pagelanding, pageStudy, pageGiveClasses } = require('./pages')

// Configurar nunjucks (templete engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views',{
    express: server,
    noCache: true,
})

// Inicio e configuração do servidor
server
// Configurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public")) 
// Rotas da aplicação
.get("/", pagelanding)
.get("/study", pageStudy)
.get("/give-classes" , pageGiveClasses)
// Start do servidor/Porta da pagina
.listen(5500) 