const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;

// PASSWORD: Kig9UOvMBTL2V07h

mongoose.connect("mongodb+srv://LuanTran:Kig9UOvMBTL2V07h@cluster0.xh9xa.mongodb.net/<dbname>?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on("connected", () => {
    console.log("Connect to database successfully");
})

mongoose.connection.on("Error", (err) => {
    console.log("Error: ", err);
})

require('./models/user');
require('./models/post');

app.use(express.json())
app.use(require('./routes/auth'));
app.use(require('./routes/post'));

app.listen(PORT, () => {
    console.log(`Listening to server at port ${PORT}`);
})