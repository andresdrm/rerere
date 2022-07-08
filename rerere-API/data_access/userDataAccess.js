const userData = require("../data/userData.json");

"use strict"
module.exports = class userDataAccess{
    async findUser(id){
        let array = userData;
        const user = JSON.stringify(array.find(user => user.id == id));

        return user;    
    }
}