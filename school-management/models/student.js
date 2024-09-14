const mongoose = require('mongoose');



module.exports = mongoose.model('Student', 
    new mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        class: {
            type: String,
            required: true
        }
    })
);
