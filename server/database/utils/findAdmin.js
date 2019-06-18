const user = require('../model/user');

const findAdmin = () => {
    return user.find({
        role: 'admin'
    })
}

module.exports = findAdmin;