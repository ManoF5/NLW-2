const Database = require('./db')
const createProffy = require('./createProffy')


Database.then(async (db) => {
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

    classScheduleValues = [
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

    // await createProffy(db, {proffyValue, classValue, classScheduleValues})

    // Consultar os dados inseridos

    // Todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)

    // Consultar as classes de um determinado professor
    // e trazer junto os dados do professor
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*,proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    console.log(selectClassesAndProffys)

    // 

})