const express = require('express');
const app = express();
const carRoute = express.Router();
const carModel = require('../models/Car');

//add car
carRoute.route('/add').post((req, res, next) => {
    carModel.create(req.body, (err, data) => {
        if (err) {
            return next(err);
        } else {
            res.json({
                success: true,
                msg: data
            });
        }
});
});

//get all cars
carRoute.route('/').get((req, res, next) => {
    carModel.find((err, data) => {
        if (err) {
            return next(err);
        } else {
            res.json({ data
            });
        }
    });
}
);

//get car by id
carRoute.route('/:id').get((req, res, next) => {
    carModel.findById(req.params.id, (err, data) => {
        if (err) {
            return next(err);
        } else {
            res.json({
                success: true,
                msg: data
            });
        }
    });
});

//update car
carRoute.route('/update/:id').put((req, res, next) => {
    carModel.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (err, data) => {
        if (err) {
            return next(err);
        } else {
            res.json({
                success: true,
                msg: data
            });
        }
    });
});

//delete car
carRoute.route('/delete/:id').delete((req, res, next) => {
    carModel.findByIdAndRemove(req.params.id, (err, data) => {
        if (err) {
            return next(err);
        } else {
            res.json({
                success: true,
                msg: data
            });
        }
    });
});

module.exports = carRoute;