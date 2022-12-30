const mongoose = require('mongoose')

const ClubServerSchema = mongoose.Schema({
    clubName: {
        type: String
    },
    clubID: String,
    clubOwner: {
        type: String
    },
    isPaid: {
        type: Boolean
    },
    isVerified: {
        type: Boolean
    },
    clubLogo: {
        type: String
    },
    clubBanner: {
        type: String
    },
    channelList: [
        {
            name: String,
            // type:String,
            messages: [
                {
                    username: String,
                    date: String,
                    message: String,
                    avatar: String,
                    userID: String
                }
            ]
        }
    ],
    membersList: [
        {
            username: String,
            avatar: String
        }
    ],
    description: {
        type: String
    }
})

module.exports = ClubServerSchema