module.exports = async function(db, {proffyValue, classValue, classScheduleValue}) {
    // Inserir dados na tabela de professores
    const insertedProffy = await db.run(`
        INSERT INTO proffys (

        ) VALUES (

        );        
    `)
}