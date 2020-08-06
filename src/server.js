// Dados
const proffys = [
    { 
        name : "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "010203040506",
        bio:"Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject:"Química",
        cost:"20",
        weekday:[0], 
        time_from:[720], 
        time_to:[1220]
    },

    { 
        name : "Manoel Fernandes",
        avatar: "https://avatars1.githubusercontent.com/u/61895268?s=460&u=c205e67adaec14a6070a62145fee558a4bd52ee3&v=4",
        whatsapp: "010203040506",
        bio:"Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject:"Química",
        cost:"20",
        weekday:[1], 
        time_from:[720], 
        time_to:[1220]
    },

    { 
        name : "Mayk Brito",
        avatar: "https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4",
        whatsapp: "010203040506",
        bio:"Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject:"Química",
        cost:"20",
        weekday:[1], 
        time_from:[720], 
        time_to:[1220]
    }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado", 
]

// Funcionalidades

function getSubject(subjectNumber) {
    const position = +subjectNumber - 1 // Posição da array
    return subjects[position]
}

function pagelanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", { proffys, filters , subjects, weekdays})
}

function pageGiveClasses(req, res) {
    const data = req.query

    // Se tiver dados
    const isNotEmpty = Object.keys(data).length != 0
    if (isNotEmpty) {

        data.subject = getSubject(data.subject)

        // Adicionar dados a lista de proffys
        proffys.push(data)

        return res.redirect("/study")
    }
    
    // Se não, mostrar a pagina
    return res.render("give-classes.html", {subjects, weekdays})
}

// Servidor
const express = require('express')
const server = express()

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