const { appendFile } = require("fs");
const app = require('express');

const whitelist = [] 
const corsOptions= {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        }
        else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions));