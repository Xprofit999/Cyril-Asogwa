require('dotenv').config();

const express = require("express");
const app = express();
// const enforce = require('express-sslify');
// app.use(enforce.HTTPS({trustProtoHeader: true}));
const path = require("path");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("build"));

app.get('*', (req, res)=> {
    app.use(express.static("build"));
    res.sendFile(path.join(__dirname, "build", "index.html"));
});




let port = process.env.PORT || 3500;

app.listen(port, err => {
    if (err)
        throw err
    console.log('Server listening on port ' + port)
});