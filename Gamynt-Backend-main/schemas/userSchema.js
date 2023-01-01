const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{
        type:String
    },
    email:{
        type:String
    },
    bio:String,
    joinedClubs:{
        type:mongoose.Schema.Types.Array
    },
    avatar:{
        type:String
    },
    banner:{
        type:String
    },
    joinedTournaments:{
        type:mongoose.Schema.Types.Array
    },
    uid:{
        type:String
    },
    tags:[
        {
            name:String,
            tag:String
        }
    ],
    gamesIPlay:{
        type:[]
    },
    crew:{
        type:[]
    },
    balance:{
        type:Number
    },
    followers:[],
    followCount:Number,
    followingCount:Number,
    following:[],
    post:[
        {
            type:String,
            url:String
        }
    ],
    directMessage:[
        {
            name:String,
            avatar:String,
            messages:[
                {
                    date:String,
                    msg:String,
                    type:String
                }
            ]
        }
    ],
    notifications:[
        {
            date:String,
            message:String,
            callToActionLink:String
        }
    ]
})

module.exports = userSchema