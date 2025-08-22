const connexion = require('../models/db');  

module.exports.ping = (req, res) => {
  const consult = 'SELECT * FROM login';

  connexion.query(consult, (err, results) => {
    if (err) {
      console.error('Error en la consulta:', err);
      return res.status(500).json({ error: 'Error en la base de datos' });
    }

    console.log('Resultados:', results);
    res.json(results);
  });
};
