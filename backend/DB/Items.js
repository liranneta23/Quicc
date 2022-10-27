const mongoose = require('mongoose');

const items = mongoose.Schema({
    name :{
        type: String
    },
    from :{
        type: String
    },
    to :{
        type: String
    },
    percent :{
        type: String
    },
});

module.exports = Items = mongoose.model('items', items);
