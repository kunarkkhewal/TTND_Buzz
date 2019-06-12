const buzz = require('../model/buzz');

createBuzz = buzz => {
    return buzz.save();
}

fetchBuzz = buzz => {
    return buzz.find();
}

module.exports = {
    createBuzz,
    fetchBuzz
}