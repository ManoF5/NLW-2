const db = require('./db')
const createProffy = require('./createProffy')


DataBase.then((db) => {
    // Inserir dados
    proffyValue = {
        name : "Manoel Fernandes",
        avatar: "https://avatars1.githubusercontent.com/u/61895268?s=460&u=c205e67adaec14a6070a62145fee558a4bd52ee3&v=4",
        whatsapp: "010203040506",
        bio:"Entusiasta das melhores tecnologias de química avançada."
    }

    classValue = {
        subject:"Química",
        cost:"20"
        // O proffyId vira pelo banco de dados
    }

    classScheduleValue = [
        // class_id vira pelo banco de dados após cadastramos a aula/class
        {
            weekday: 1, 
            time_from: 720, 
            time_to: 1220
        },
        {
            weekday: 0, 
            time_from: 520,
            time_to: 1220
        }
    ]

    // createProffy(db, {proffyValue, classValue, classScheduleValue})

    // Consultar os dados inseridos
    
})