const express = require('express');
var cors = require('cors');

const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const yargs = require('yargs');
const arguments = yargs.argv._
const app = express();



app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));



console.log(arguments)

//connect mongoDB

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://dshirac:Aahrahr1!%0A@cluster0-wt2mi.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("myFamilyDB").collection("users");
  let docs = collection.find({});
  console.log(docs)
  // perform actions on the collection object
  client.close();
});




// const url = "mongodb://localhost:27017/MyFamilyDB";
// mongoose.connect(url, { useNewUrlParser: true });
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', () => {
//     console.log('we are connected!');
// });

//Define a schema
const Schema = mongoose.Schema;
const toDoListScheme = new Schema({
    authorName: String,
    img: String,
    date: Date,
    reviewDecription: String,
    id: mongoose.ObjectId
});
const specialDatesScheme = new Schema({
    date: Date,
    user: String,
    dateType:String,
    id: mongoose.ObjectId
});
// const usersScheme = new Schema({
//     userName: String,
//     pass: String,
// });



// create collection (model) with it's schema
const toDoListModel = mongoose.model('toDoList', toDoListScheme);


if (arguments.includes('createReviews')) {


    // Create an instance of model SomeModel
    var toDoListInstance = new toDoListModel({ authorName: 'awesome', authorLast: "bla", img: "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=beautiful-beauty-blue-414612.jpg&fm=jpg", date: Date.now(), gameName: 'doom3', rating: 3.6, reviewDecription: 'yesh li tsav she korim lo yehoshua' });

    // Save the new model instance, passing a callback
    toDoListInstance.save(function (err) {

    });
}
// if (arguments.includes('createUsers')) {
//     // create collection (model) with it's schema
//     const usersModel = mongoose.model('users', usersScheme);

//     // Create an instance of model SomeModel
//     var usersInstance = new usersModel({ userName: 'moshe', pass: 'asd' });

//     // Save the new model instance, passing a callback
//     usersInstance.save(function (err) {

//     });
// }



app.get('/ToDolist', (req, res) => {

    toDoListModel.find({}, function (err, docs) {
        console.log(docs)
        res.send(docs);
    });


})

app.post('/FindGameReview', (req, res) => {

    reviewsModel.find({ req }, function (err, docs) {
        console.log(docs)
        res.send(docs);
    });


})




//#region port
let port = process.env.port || 4000;
app.listen(port, function () { console.log("server ur on", port) })
//#endregion