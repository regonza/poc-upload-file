const mongoose = require('mongoose')
const model = require('../models/user')

const options = {
    page: 1,
    limit: 3
};

const parseId = (id) => {
    return mongoose.Types.ObjectId(id)
}

exports.getData = (req, res) => {
    model.paginate({}, options, (err, docs) => {
        res.send(docs);
    })
    //todo manejo de errores
}

exports.insertData = (req, res) => {
    const data = req.body
    model.create(data, (err, docs) => {
        if (err) {
            res.status(422.).send({ error: err.message });
        } else {
            res.send({ data: docs });
        }

    });
}