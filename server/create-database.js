const MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/atomic"
database = "atomic"
collection = "players"
data = {
        name : "name",
        charactersheet : {
          description : "description",
          refresh : "refresh",
          highconcept : "high concept",
          trouble : "trouble",
          aspects : ["1", "2", "3"],
          skills : {"Athletics" : 3, "Fight" : 4 },
          extras : "???",
          stunts : "???",
          physicalstress : 0,
          mentalstress : 0,
          consequences : []
        },
        items : [],
        notes : []
      }

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
