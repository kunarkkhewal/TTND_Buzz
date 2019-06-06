const user = require('../model/user');

const createUser = (userData) => {
    return userData.save();
}

const findOne = (userId) => {
    return user.findOne({
        googleId: userId
    })
}

module.exports={
    createUser,
    findOne
}