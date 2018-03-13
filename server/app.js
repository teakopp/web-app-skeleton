
const http = require("http")
const MongoClient = require('mongodb').MongoClient;
const express = require('express')
const app = express()
const cors = require('cors')
const url = 'mongodb://localhost:27017/atomic'

//turn off in production
app.use(cors())

app.get("/", (req, res) => {

  MongoClient.connect(url, (err, client) => {
    let db = client.db('atomic')

    db.collection('players').find().toArray( (req, result) => {
       if (err) throw err
       res.send(result)
       console.log('Get on port 3000');
     })
  });
})

app.listen(3000, () => {
  console.log('Listening on port 3000...');
})
