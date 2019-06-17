const user = require('../database/model/user');

const findAdmin = () => {
    return user.find({
        role: 'admin'
    })
}

module.exports = findAdmin;