const fast2sms = require('fast-two-sms')
const express = require("express")
const cdn = require("cloudinary").v2
const routes = express.Router()
cdn.config({
    cloud_name: "dd2rk71gb",
    api_key: "363211158946923",
    api_secret: "sqTD-thpTcu7OmrjUC7FvFvFmuI",
});
const {tournamentRegistration,tournamentAll,getTournament} = require("../controllers/tournamentRegistration")
const {createUser,getUser, getUsers} = require("../controllers/User")
const {createClub,getAllClubs,getClubByUID,getChats,createChannel,getChannel,addMember,getMember} = require("../controllers/clubServer")
const {otp,verifyOTP} = require("../controllers/otp.js")
routes.post("/register-tournament",tournamentRegistration)
routes.post("/create-club",createClub)
routes.post("/upload",(req,res)=>{
    const files = req.files.img
    cdn.uploader.upload(files.tempFilePath, async (err, result) => {
        res.send({
            result:result.url
        })
    })
})
routes.get("/otp",otp)
routes.get("/otp-verify",verifyOTP)
routes.get("/create-user",createUser)
routes.get("/all-tournament",tournamentAll)
routes.get("/get-tournament",getTournament)
routes.get("/all-clubs",getAllClubs)
routes.get("/club-uuid",getClubByUID)
routes.get("/get-user",getUser)
routes.get("/get-channels",getChannel)
routes.get("/get-chats",getChats)
routes.get("/create-channel",createChannel)
routes.get("/add-member",addMember)
routes.get("/get-members",getMember)
routes.get("/users",getUsers)
module.exports = routes
    
