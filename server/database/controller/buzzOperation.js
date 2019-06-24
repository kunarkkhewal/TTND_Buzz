const buzz = require('../model/buzz');

createBuzz = buzz => {
    return buzz.save();
}

fetchBuzz = () => {
    return buzz.find().sort({ createdAt: -1 });
}

fetchBuzzById = id => {
    return buzz.findOne({ _id: id });
}

likeBuzz = (id, emailId, status) => {
    if (status) {
        console.log("status in IF", status)
        return buzz.findOneAndUpdate(
            { _id: id },
            {
                $push: {
                    like: {
                        userId: emailId
                    }
                },
                $pull: {
                    dislike: {
                        userId: emailId
                    }
                }
            },
            {
                new: true,
                useFindAndModify: true
            }
        )
    }
    else {
        console.log("status in ELSE", status);
        return buzz.findOneAndUpdate(
            { _id: id },
            {
                $pull: {
                    like: {
                        userId: emailId
                    }
                }
            },
            {
                new: true,
                useFindAndModify: true
            }
        )
    }
}

dislikeBuzz = (id, emailId, status) => {
    if (status) {
        console.log("status in IF", status);
        return buzz.findOneAndUpdate(
            { _id: id },
            {
                $push: {
                    dislike: {
                        userId: emailId
                    }
                },
                $pull: {
                    like: {
                        userId: emailId
                    }
                }
            },
            {
                new: true,
                useFindAndModify: true
            }
        )
    }
    else {
        console.log("status in ELSE", status)
        return buzz.findOneAndUpdate(
            { _id: id },
            {
                $pull: {
                    dislike: {
                        userId: emailId
                    }
                }
            },
            {
                new: true,
                useFindAndModify: true
            }
        )
    }
}

module.exports = {
    createBuzz,
    fetchBuzz,
    fetchBuzzById,
    likeBuzz,
    dislikeBuzz
}