const mongoose = require('mongoose');

mongoose.connect(
    "mongodb+srv://<username>:<password>@mtech.80zyonp.mongodb.net/?retryWrites=true&w=majority",
    {
        useNewUrlParser: true
    },
    err => {
        if (!err) {
            console.log(`Connection succeeded`);
        } else {
            console.log(`Error in connection ${err}`);
        }
    })

require('./student.model')