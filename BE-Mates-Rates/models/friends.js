const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const friendSchema = new Schema({
    name: Number
});

module.exports = mongoose.model('Friend', friendSchema);
