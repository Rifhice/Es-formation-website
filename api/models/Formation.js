const mongoose = require('mongoose')

const FormationSchema = new mongoose.Schema({
    name: String
}, { timestamps: true });

const Formation = mongoose.model('Formation', FormationSchema);

module.exports = Formation;