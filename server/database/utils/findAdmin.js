const user = require('../model/user');

const findAdmin = department => {
    return user.find({
        $and: [
            {role: 'admin'},
            {department}
        ]
        
        
    })
}

module.exports = findAdmin;