const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

/*app.listen(3000, function() {
	console.log('server running on port 3000')
}) */

app.get('/',(req,res)=>{
	res.send('Hello World')
})

const MongoClient = require('mongodb').MongoClient 

const uri = "mongodb+srv://tauana:<password>@teste-vfviw.mongodb.net/test?retryWrites=true&w=majority"

MongoClient.connect(uri, (err, client) => {
  if (err) return console.log(err)
  
  db = client.db('crud-nodejs') //coloque o nome do seu DB
	
	app.listen(3000, ()=> {
		console.log('server running on port 3000')
	})
})


/*
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/dobro/:n', function (req, res) {
    let result = parseInt(req.params.n)*2;
    obj = {'number':req.params.n,"result":result};
    myObj = JSON.stringify(obj);
    res.type("json").send(myObj);
});

app.get('/triplo/:n', function (req, res) {
  let result = parseInt(req.params.n)*3;
  obj = {'number':req.params.n,"result":result};
  myObj = JSON.stringify(obj);
  res.type("json").send(myObj);
});

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});
*/