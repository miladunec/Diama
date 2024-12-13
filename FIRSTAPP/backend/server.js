const express = require("express");
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "demoproject"
});

app.post('/signup', (req, res) => {
    const sql = "INSERT INTO users (firstname, lastname, email, password, phone_number, birthday_date) VALUES (?)";
    const values =[
        req.body.firstname,
        req.body.lastname,
        req.body.email,
        req.body.password,
        req.body.phone_number,
        req.body.birthday_date
    ]
    db.query(sql, [values], (err, data) => {
        if(err){
            return res.json("Error");
        }
        return res.json(data);
        });
    });

app.post('/login', (req, res) => {
    const sql = "SELECT * From users WHERE email = ? AND password = ?";
    db.query(sql, [req.body.email,req.body.password], (err, data) => {
        if(err){
            return res.json("Error");
        }
        if (data.length > 0) {
                    return res.json("Login Success");
                } else {
                    return res.json("Invalid Credentials");
                }
        });
    });

    app.get('/user/:id', (req, res) => {
        const sql = "SELECT * FROM users WHERE id = ?";
        db.query(sql, [req.params.id], (err, data) => {
            if (err) {
                return res.status(500).json("Error");
            }
            return res.json(data[0]);
        });
    });
    
    app.put('/user/:id', (req, res) => {
        const { firstname, lastname, email, phone_number, birthday_date } = req.body;
        const sql = "UPDATE users SET firstname = ?, lastname = ?, email = ?, phone_number = ?, birthday_date = ? WHERE id = ?";
        db.query(sql, [firstname, lastname, email, phone_number, birthday_date, req.params.id], (err, data) => {
            if (err) {
                return res.status(500).json("Error");
            }
            return res.json("User updated successfully");
        });
    });
    
    app.delete('/user/:id', (req, res) => {
        const sql = "DELETE FROM users WHERE id = ?";
        db.query(sql, [req.params.id], (err, data) => {
            if (err) {
                return res.status(500).json("Error");
            }
            return res.json("User deleted successfully");
        });
    });
    
const PORT = process.env.PORT || 8081;
app.listen(8081, () => {
    console.log("listening");
});