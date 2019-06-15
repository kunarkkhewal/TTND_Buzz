const buzz = require('../model/buzz');

createBuzz = buzz => {
    return buzz.save();
}

fetchBuzz = () => {
    return buzz.find().sort({createdAt: -1});
}

module.exports = {
    createBuzz,
    fetchBuzz
}