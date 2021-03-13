const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

/*==========
BASE ROUTE
============*/
app.get('/', (req, res) => {
    res.send("Hello World");
});

/*==========
BASE ROUTE
============*/


app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running");
});