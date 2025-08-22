const express = require('express');
const app = express();
const port = 3000;
const routers = require('./src/api/endPoinst');
const cors = require('cors'); 


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
   origin: 'http://localhost:5173',
   methods: ['GET', 'POST']
}))
app.use('/', routers);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

