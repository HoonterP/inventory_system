let { MongoClient } = require("mongodb")
// uri = "mongodb://127.0.0.1:27017"
uri = "mongodb://localhost:27017"
client = new MongoClient(uri)
async function run(){
    // This looks like a try and except, similar to python.
    try{
        await client.connect()
        database = client.db('PimparatanaHunter')
        table = database.collection('employees')
        record = {
            employee_id : 6,
            name        : "Bam Bam",
            username    : "bbam",
            birthdate   : "12/02/1997",
            email       : "bbam@unm.edu",
            address     : "4213 Fake St",
            phone       : "(505)-777-4031"
        }
        result = await table.insertOne(record)
        console.log('Record_id: ${result.inserId} inserted!')
    } finally {
        await client.close();
    }
}
run().catch(console.dir);