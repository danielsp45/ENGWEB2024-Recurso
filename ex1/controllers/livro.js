const mongoose = require('mongoose');
var Livro = require('../models/livro');

module.exports.list = () => {
    return Livro.find().exec();
}

module.exports.listCharactersWithName = (character) => {
    return Livro.find({ characters: { $regex: character } }).exec();
}

module.exports.listByGenre = (genre) => {
    return Livro.find({ genres: genre }).exec();
}

module.exports.listGenres = () => {
    return Livro.distinct('genres').sort().exec();
}

module.exports.listCharacters = () => {
    return Livro.distinct("characters").sort().exec();
}

module.exports.findById = (id) => {
    return Livro.findOne({ _id: id }).exec();
}

module.exports.insert = (livro) => {
    if (Livro.find({ _id: livro._id }).exec().length != 1) {
        var newLivro = new Livro(livro);
        return newLivro.save();
    }
    
    return Promise.reject(new Error('Livro já existe'));
}

module.exports.remove = (id) => {
    return Livro.find({ _id: id }).deleteOne().exec();
}

module.exports.update = (id, livro) => {
    return Livro.findByIdAndUpdate(id, livro, { new: true }).exec();
}
