const user = require('../model/user');

const findAdmin = () => {
    return user.find({
        $and: [
            {role: 'admin'},
            // {department: 'hardware'}
        ]
        
        
    })
}

module.exports = findAdmin;