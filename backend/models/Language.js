const mongoose = require('mongoose');

const LanguageSchema = new mongoose.Schema ({
    language: String,
})

Language = mongoose.model("Language", LanguageSchema)
module.exports = Language;