const mongoose = require('mongoose');

const recommendations = mongoose.Schema({
    item: {
        type: String
    },
    recommendation_list:
    [
        {
            type: String
        }
    ],
});

module.exports = Recommendations = mongoose.model('recommendations', recommendations);
