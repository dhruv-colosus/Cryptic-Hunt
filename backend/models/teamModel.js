const mongoose = require("mongoose");
const { genCode } = require("../utils");

const teamSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    members: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],
    teamOwner:  {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true,
    }, 
    teamCode: {
        type: mongoose.Schema.Types.Number,
        unique: true,
        required: true
    }
});

const Team = mongoose.model("Team", teamSchema);

module.exports = Team;
