const User = require("../models/User")
const { v4: uuidv4 } = require('uuid');
module.exports.createUser = async (req,res) =>{
    const {username,email,avatar} = req.query
    const present = await User.find({email})
    console.log(present)
    if(present.email === email){
        res.send(present)
    }else{
        const doc = new User({
            username,
            email,
            joinedClubs:[],
            avatar,
            banner:"",
            joinedTournaments:[],
            uid:uuidv4(),
            tags:[
                {
                    name:"Newbie",
                    tag:"https://cdn3d.iconscout.com/3d/premium/thumb/game-controller-4790165-3988746.png"
                },
            ],
            gamesIPlay:[],
            crew:[],
            balance:0
        })
        await doc.save()
        res.send(doc)
    }
        
    
}

module.exports.getUser = async (req,res)=>{
    const {uid} = req.query
    const doc = await User.findOne({
        uid
    })
    res.send(doc)
}

module.exports.getUsers = async (req,res)=>{
    const doc = await User.find({})
    res.send(doc)
}

module.exports.addBalance = async(req,res)=>{
    const {email} = req.query;
    const doc = await User.find({email});
    
}