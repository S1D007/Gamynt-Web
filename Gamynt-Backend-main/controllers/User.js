const User = require("../models/User")
const { v4: uuidv4 } = require('uuid');

module.exports.getUser = async (req, res) => {
    const { uid } = req.query
    const doc = await User.findOne({
        uid
    })
    res.send(doc)
}

module.exports.getUsers = async (req, res) => {
    const doc = await User.find({})
    res.send(doc)
}

module.exports.addDiamonds = async (req, res) => {
    const { email, amount } = req.query;
    const doc = await User.findOne({email})
    const updatedDiamonds = +doc.diamonds + +amount
    // res.send(doc)
    // console.log(updatedDiamonds)
    await User.updateOne({ email }, {
        diamonds:updatedDiamonds
      }).then((e)=>{
        res.send(e)
      })
}