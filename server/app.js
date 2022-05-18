const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');


// Connect to the database
mongoose.connect('mongodb://localhost:27017/cars').then(() => {
    console.log('Connected to the database');
}
).catch(() => {
    console.log('Failed to connect to the database');
}
);


//set up express
const carRoute = require('./routes/car.route');
const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
)
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/',express.static(path.join(__dirname, 'public')));
app.use('/api', carRoute);


//set up port
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Server is running on port: ' + port);
}
);

//404 error
app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        msg: '404 error'
    });
}
);
//error handler
app.use((err, req, res, next) => {
    res.status(500).json({
        success: false,
        msg: '500 error'
    });
}
);