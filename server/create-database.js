const MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/atomic"
database = "atomic"
collection = "players"
data = {some : "data" }

MongoClient.connect(url, (err, db)=>{
  if (err) throw err;
  console.log("Database created!");
  let dbo =db.db(database)

  dbo.createCollection(collection, (err, res) => {
    if (err) throw err;
    console.log("Collection created!")
    db.close();
  })

  dbo.collection(collection).insertMany([data])

})
