const buzz = require('../model/buzz');

createBuzz = buzz => {
    return buzz.save();
}

fetchBuzz = () => {
    return buzz.find();
}

module.exports = {
    createBuzz,
    fetchBuzz
}