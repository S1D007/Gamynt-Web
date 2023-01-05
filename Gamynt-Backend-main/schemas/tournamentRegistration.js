const mongoose = require("mongoose")

const TournamentRegistrationSchema = mongoose.Schema({
    bannerImgUrl:{
        type:String
    },
    title:{
        type:String,
        // required:true
    },
    game:{
        type:String,
        // required:true
    },
    mode:{
        type:String
    },
    id:{
        type:String
    },
    slot:{
        type:Number
    },
    clubName:{
        type:String
    },
    EntryFees:{
        type:String
    },
    participiants:{
        type: mongoose.Schema.Types.Array 
    },
    tags:{
        type:mongoose.Schema.Types.Array
    },
    description:{
        type:String
    },
    PrizePool:{
        type:Number
    },
    schedule:{
        type:String
    },
    advance:[{
        advanceType:String,
        advanceAmount:Number,
        duration:String
    }]
})

module.exports = TournamentRegistrationSchema
