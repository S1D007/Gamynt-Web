const TournamentRegistration = require("../models/TournamentRegistrationCollection")
const cdn = require("cloudinary").v2
// Post Request
const { v4: uuidv4 } = require('uuid');
module.exports.tournamentRegistration = async (req, res) => {
    const {  game,title,banner, mode, slot, EntryFees,description,PrizePool,tags } = req.body
    try {
            const doc = new TournamentRegistration({
                bannerImgUrl:banner,
                title,
                game,
                mode,
                slot,
                EntryFees,
                description,
                PrizePool,
                tags:[],
                id:uuidv4(),
                numberOfParticipiants:[],
            })
            await doc.save()
            console.log(doc)
            res.send(doc)
    } catch (e) {
        res.send(e)
    }
}

// Get Requests

module.exports.tournamentAll = async (req, res) => {
    const data = await TournamentRegistration.find()
    res.send(data)
}

module.exports.getTournament = async (req,res) =>{
    const {id} = req.query
    const data = await TournamentRegistration.find({id})
    res.send(data)
}
