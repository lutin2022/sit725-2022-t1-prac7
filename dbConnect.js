require('dotenv').config()
const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://"+process.env.MONGO_USER+":"+process.env.MONGO_PASSWORD+"@cloudbootcamp.cov6n.mongodb.net/myFirstDatabase?retryWrites=true&w=majorit" 
const client = new MongoClient(uri,{ useNewUrlParser: true })

client.connect((err,db) => {
     if(!err){
       console.log('Database Connected')
     }else{
       console.log('[error]',err)
     }
 });
 

exports.mongoClient = client;