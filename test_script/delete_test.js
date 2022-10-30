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
        query = {employee_id:6}
        result = await table.deleteOne(query)
        console.log('# Records deleted: ${result.nodifiedCount}')
    } finally {
        await client.close();
    }
}
run().catch(console.dir);