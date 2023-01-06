const User = require("../models/User")
const { v4: uuidv4 } = require('uuid');

module.exports.getUser = async (req, res) => {
  const { uid, username } = req.query
  const doc = await User.findOne({
    uid
  })
  res.send(doc)
}
module.exports.getUserByUsername = async (req, res) => {
  const { username } = req.query
  const doc = await User.findOne({
    username
  })
  res.send(doc)
}

module.exports.getUsers = async (req, res) => {
  const doc = await User.find({})
  const randUsers = doc.sort(() => Math.random() - 0.5);
  res.send(randUsers)
}
module.exports.addFollowers = async (req, res) => {
  const { value, email, myEmail, myUsername, username } = req.query;
  if (value === "1") {
    User.updateOne({ email }, { $inc: { followCount: 1 }, $push: { followers: { email:myEmail, username:myUsername } } }, (e) => {
      // console.log(e)
    });
    User.updateOne({ email:myEmail }, { $inc: { followingCount: 1 }, $push: { following: { email, username } } }, (e) => {
      // console.log(e)
    });
    res.send({
      done:true
    })
  } else {
    User.updateOne({ email }, { $inc: { followCount: -1 }, $pull: { followers: { email:myEmail, username:myUsername } } }, (e) => {
      // console.log(e)
    });
    User.updateOne({ email:myEmail }, { $inc: { followingCount: -1 }, $pull: { following: { email, username } } }, (e) => {
    });
    res.send({
      done:true
    })
  }
}

module.exports.addDiamonds = async (req, res) => {
  const { email, amount } = req.query;
  const doc = await User.findOne({ email })
  const updatedDiamonds = +doc.diamonds + +amount
  await User.updateOne({ email }, {
    diamonds: updatedDiamonds
  }).then((e) => {
    res.send(e)
  })
}
module.exports.editProfile = async (req, res) => {
  const { username, bio, email, avatar, name } = req.query;
  const doc = await User.findOne({ email })
  await User.updateOne({ email }, {
    username: username !== "" ? username : doc.username,
    bio: bio !== "" ? bio : doc.bio,
    avatar: avatar !== "" ? avatar : doc.avatar,
    name: name !== "" ? name : doc.name,
  }).then((e) => {
    res.send({
      done: true
    })
  })
}