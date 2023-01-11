const TournamentRegistration = require("../models/TournamentRegistrationCollection")
const cdn = require("cloudinary").v2
// Post Request
const { v4: uuidv4 } = require('uuid');
module.exports.tournamentRegistration = async (req, res) => {
    const { game, title, bannerImgUrl, mode, slot, EntryFees, description, PrizePool, tags, schedule, advanceType,advanceAmount,duration } = req.query
    // console.log(req.query)
    try {
        const doc = new TournamentRegistration({
            bannerImgUrl,
            title,
            game,
            mode,
            slot,
            EntryFees,
            description,
            PrizePool,
            tags: tags,
            id: uuidv4(),
            participiants: [],
            schedule,
            advance: [{
                advanceType,
                advanceAmount,
                duration
            }]
        })
        await doc.save()
        // console.log(doc)
        res.send(doc)
    } catch (e) {
        res.send(e)
    }
}

// Get Requests

module.exports.tournamentAll = async (req, res) => {
    const data = await TournamentRegistration.find()
    const randomTournaments = data.sort(() => Math.random() - 0.5);
    res.send(randomTournaments)
}

module.exports.getTournament = async (req, res) => {
    const { id } = req.query
    const data = await TournamentRegistration.findOne({ id })
    res.send(data)
}
