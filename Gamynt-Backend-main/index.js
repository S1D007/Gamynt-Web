const express = require("express")
const app = express()
const fileUpload = require("express-fileupload")
const connectToDatabase = require("./config/db");
const ClubServer = require("./models/ClubServer.js")
const routes = require("./routes/routes")
const server = require("http").createServer(app)
const io = require("socket.io")(server,{
    cors:{
        origin:"*"
    }
})
const cors = require("cors")
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: true }));
connectToDatabase();
app.use(fileUpload({
    useTempFiles: true
}))
const PORT = process.env.PORT || 8080

app.use(routes)

app.get("/", (req, res) => {
    res.send("Gamynt Backend")
})


io.on('connection',(socket)=>{
    socket.on("club-chat",async (payloads)=>{
        io.emit("chats",payloads)
        // console.log(payloads)
        const club = await ClubServer.findOne({
            clubID:payloads.uuid
        })
        club.channelList[payloads.index].messages.push({
            message:payloads.message,
            avatar:payloads.avatar,
            username:payloads.username,
            userID:payloads.uid,
            date:payloads.date
        })
        await club.save()
        // console.log(club)
        // console.log(club.channelList[0].messages)
    })
})

server.listen(PORT,(e)=>{
    console.log("connected at http://localhost:8080")
})


