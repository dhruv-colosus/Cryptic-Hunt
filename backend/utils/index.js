const Team = require("../models/teamModel");

async function genCode(n = 6) {
    let code;
    code = Math.floor(Math.pow(10, n - 1) + Math.random() * (Math.pow(10, n) - Math.pow(10, n - 1) - 1));
    //do {
        // Generate a random n-digit number
        // Check if the code already exists in the database
     //   const existingTeam = await Team.findOne({ inviteCode: code });
    //} while (existingTeam);

    return code;
}

module.exports = {
    genCode
}
