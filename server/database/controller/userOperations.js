const user = require('../model/user');

const createUser = (userData) => {
    return userData.save((err,data)=>{
        if(err) console.log("error",err);
        console.log("success",data)
    });
}

const findOne = (userId) => {
    return user.find({
        googleId: userId.googleId
    })
}

module.exports={
    createUser,
    findOne
}