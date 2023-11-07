const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://noorrehman:noorrehman@cluster0.xxmfqw9.mongodb.net/noorrehman?retryWrites=true&w=majority')
  .then(() => console.log('Connected with MongoDatabase')).catch((e)=>{
    console.log("Database connection error");
});