const express = require("express");
const mysql = require('mysql');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(express.json());

//const bodyParser = require('body-parser');
//app.use(bodyParser.json());
// app.use(cors({
//     origin: ["http://localhost:3000"],
//     methods: ["POST","GET"],
//     credentials: true
// })); 


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    port: 4306,
    database: 'park'

})

db.connect((err) => {
    if (err) {
      console.error('Error connecting to the database:', err);
      return;
    }
    console.log('Connected to the database');
  });

app.post('/register', (req, res)=>{
    const sql = "INSERT INTO users (`username`,`email`,`password`) VALUES (?)";
    console.log(req.body);
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
        ]
    db.query(sql,[values], (err, data) => {
        if (err) {
            console.log(error);
            return res.json("Error");
        }
        return res.json(data);

    })
})

app.post('/login', (req, res)=>{
    const sql = "SELECT * FROM users WHERE `email` = ? AND `password` = ?)";
    db.query(sql,[req.body.email,req.body.password], (err, data) => {
        if (err) {
            return res.json("Error");
        }
        if (data.length > 0){
            return res.json("Success");
        }else {
            return res.json("Failed");
        }

    })
})
app.get('/park', (req, res)=>{
    const sql = "SELECT * FROM park_details";
    db.query(sql, (err, data) => {
        if (err) {
            console.log(error);
            return res.json("Error");
        }
        return res.json(data);

    })
})



app.listen(8081,()=>{
    console.log("Running..");
})
