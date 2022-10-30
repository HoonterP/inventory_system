let { MongoClient } = require("mongodb")
uri = "mongodb://127.0.0.1:27017"
// uri = "mongodb://localhost:27017"
client = new MongoClient(uri)
async function run(){
    // This looks like a try and except, similar to python.
    try{
        await client.connect()
        database = client.db('PimparatanaHunter')
        table = database.collection('inventory')
        query = {}
        row = await table.find(query) 
        await row.forEach(function(row) { console.log(row) })
    } finally {
        await client.close();
    }
}
run().catch(console.dir);