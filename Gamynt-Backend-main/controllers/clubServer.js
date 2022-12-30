const ClubServer = require("../models/ClubServer")
// const ClubServer = require('../models/ClubServer')
const { v4: uuidv4 } = require('uuid');
module.exports.createClub = async (req, res) => {
    const { clubName, clubOwner, clubLogo, clubBanner, description } = req.body
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
    res.send("Done")
}

// Get

module.exports.getAllClubs = async (req,res) => {
    const data = await ClubServer.find()
    res.send(data)
}

module.exports.getClubByUID = async(req,res)=>{
    const {uuid} = req.query
    const data = await ClubServer.find({
        clubID:uuid
    })
    res.send(data)
}

module.exports.getChats = async(req,res)=>{
    const {uuid,index} = req.query
    const data = await ClubServer.findOne({
        clubID:uuid
    })
    const chats = data.channelList[index].messages
    console.log(chats)
    res.send(chats)
}

module.exports.createChannel = async(req,res)=>{
    const {id,name} = req.query
    const club = await ClubServer.findOne({
        clubID:id
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
    console.log(club)
}

module.exports.getChannel = async (req,res) =>{
    const {id} = req.query
    const club = await ClubServer.findOne({
        clubID:id
    })
    const channels = club.channelList
    res.send(channels)
}

module.exports.addMember = async (req,res)=>{
    const {username,avatar,uuid} = req.query;
    const club = await ClubServer.findOne({
        clubID:uuid,
        username,
        avatar
    })
    if (!club){
        club.membersList.push({
            username,
            avatar
        })
    }
    await club.save()
}
module.exports.getMember = async (req,res)=>{
    const {uuid} = req.query;
    const club = await ClubServer.findOne({
        clubID:uuid
    })
    const members = club.membersList
    res.send(members)
}