const buzz = require('../model/buzz');

createBuzz = buzz => {
    return buzz.save();
}

fetchBuzz = skipValue => {
    return buzz.find().sort({ createdAt: -1 }).limit(5).skip(skipValue);
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
                        emailId: emailId
                    }
                },
                $pull: {
                    dislike: {
                        emailId: emailId
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
                        emailId: emailId
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
                        emailId: emailId
                    }
                },
                $pull: {
                    like: {
                        emailId: emailId
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
                        emailId: emailId
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

deletePost = (id) => {
    return buzz.findByIdAndRemove({ _id: id });
}

module.exports = {
    createBuzz,
    fetchBuzz,
    fetchBuzzById,
    likeBuzz,
    dislikeBuzz,
    deletePost
}