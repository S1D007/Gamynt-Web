const ClubServer = require("../models/ClubServer")
// const ClubServer = require('../models/ClubServer')
const User = require("../models/User")
const { v4: uuidv4 } = require('uuid');
module.exports.createClub = async (req, res) => {
    const { clubName, clubOwner, clubLogo, clubBanner, description } = req.query
    const doc = new ClubServer({
        clubName, clubID: uuidv4(), clubOwner, clubLogo, description,
        clubBanner, membersList: [
            {
                username: clubOwner,
                avatar: "https://media.discordapp.net/attachments/1036217871212216320/1036488069672603668/unknown.png"
            }
        ], channelList: [{
            name: "general",
            // type:"Text",
            messages: [{
                username: "Gamynt-Bot",
                date: "",
                message: `Welcome to ${clubName}`, 
                avatar: "https://media.discordapp.net/attachments/1036217871212216320/1036488069672603668/unknown.png",
                userID: uuidv4()
            }]
        }
        ],
        isPaid: false,
        isVerified: false
    })
    await doc.save()
    res.send({
        result:true
    })
}

// Get

module.exports.getAllClubs = async (req,res) => {
    const data = await ClubServer.find({})
    const randomClub = data.sort(() => Math.random() - 0.5);
    res.send(randomClub)
}

module.exports.getClubByID = async(req,res)=>{
    const {_id} = req.query
    // console.log()
    const data = await ClubServer.findOne({
        _id
    })
    res.send(data)
}

module.exports.getChats = async(req,res)=>{
    const {_id,index} = req.query;
    // console.log(_id,index)
    const data = await ClubServer.findOne({
        _id
    })
    const chats = data.channelList[index].messages
    // console.log(chats)
    res.send(chats)
}

module.exports.createChannel = async(req,res)=>{
    const {_id,name} = req.query
    const club = await ClubServer.findOne({
        _id
    })

    club.channelList.push({
        name,
        messages: [{
            username: "Gamynt-Bot",
            date: Date.now(),
            message: `Welcome to #${name}`, 
            avatar: "https://media.discordapp.net/attachments/1036217871212216320/1036488069672603668/unknown.png",
            userID: uuidv4()
        }]
    })
    await club.save()
    res.send(club)
    // console.log(club)
}

module.exports.getChannel = async (req,res) =>{
    const {_id} = req.query
    const club = await ClubServer.findOne({
        _id
    })
    const channels = club.channelList
    res.send(channels)
}

module.exports.addMember = async (req,res)=>{
    const {username,avatar,_id} = req.query;
    const user = await User.findOne({
        username
    })
    const club = await ClubServer.findOne({
        _id
    })
    // console.log(club)
    console.log()
    if (!club.membersList.some(e => e.username === username)){
        // console.log(!club.membersList.includes(username)
        club.membersList.push({
            username,
            avatar
        })
        user.joinedClubs.push({
            clubID:_id,
            logo:club.clubLogo,
            banner:club.clubBanner,
            name:club.clubName
        })
        await user.save()
        await club.save()
    }
}