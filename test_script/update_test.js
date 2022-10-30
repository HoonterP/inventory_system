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
        where = {employee_id:6}
        changes = {$set:{
            name        : "Bam Bam",
            username    : "bbam",
            birthdate   : "10/09/1995",
            email       : "bbam@unm.edu",
            address     : "5213 Fake St",
            phone       : "(505)-222-4031"
        }}
        result = await table.updateOne(where, changes)
        console.log('# Records Modified: ${result.nodifiedCount}')
    } finally {
        await client.close();
    }
}
run().catch(console.dir);