const HOST = "127.0.0.1";
const PORT = "27017";
const DBNAME = "Sea";
const MONGOURI = `mongodb://${HOST}:${PORT}/${DBNAME}`;
const mongoose = require('mongoose');


console.log(MONGOURI);
mongoose.connect(MONGOURI);
