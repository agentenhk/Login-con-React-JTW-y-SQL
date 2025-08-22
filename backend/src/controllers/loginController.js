const connexion = require('../models/db');  
const jwt = require('jsonwebtoken');    

module.exports.login = (req, res) => {

    const {username, password } = req.body;
    console.log(username, password);    

    const consult = 'SELECT * FROM login WHERE username = ? AND password = ?';

    try {
        connexion.query(consult, [username, password], (error, results) => {
        if (error) {
            res.send(error)
            }

            if (results.length > 0) {
                const token = jwt.sign({ username}, "Stack" , {

                    expiresIn: '3m' 
                })
                res.send({token})
            }
            else {
                console.log('wrong user');
                res.send({ message: 'wrong user' })
            }
        })


    } catch (error) {
        
    }

}