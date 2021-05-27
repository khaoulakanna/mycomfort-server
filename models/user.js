const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email : {
        type : String
    },
    nom : {
        type: String
    },
    prenom : {
        type: String
    },
    dateNaissance : {
        type: Date
    },
    genre: {
        type: String
    },
    ville : {
        type: String
    }
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;