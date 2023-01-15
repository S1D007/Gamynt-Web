import axios from "axios"
import create from "zustand"
const url = `https://gamynt-backend-production.up.railway.app`
import io from 'socket.io-client'
const useSendOTP = create(
    (set) => ({
        verified: false,
        uid: "",
        verifyEmail: (values) => {
            // console.log(values)
            axios.get(`${url}/otp-verify?email=${values.email.toLowerCase()}&otp=${values.otp}`).then((e) => {
                set(() => ({
                    verified: e.data.verified,
                    uid: e.data?.userData?.uid
                }))
            })
        },
        sendEmail: (values) => {
            if (values.btnClicked) {
                axios.get(`${url}/otp?email=${values.email.toLowerCase()}`).then((e) => {
                    // console.log(e)
                })
            }
        }
    })

)
const useUserData = create(

    (set) => ({
        result: {},
        diamond: 0,
        coin: 0,
        loaded:false,
        sendDetailstoServer: (values) => {
            // if () {
                axios.get(`${url}/get-user?uid=${values.uid}`).then((e) => {
                    // console.log(e.data)
                    set(() => ({
                        result: e.data,
                        diamond: e.data.diamonds,
                        coin: e.data.coins,
                        loaded:values.loaded
                    }))
                })
            // }
        },
        done:false,
        editProfile: ({ username, bio, email,name,avatar }) => {
            // console.log(avatar)
            axios.get(`${url}/edit-profile?username=${username}&bio=${bio}&email=${email}&name=${name}&avatar=${avatar}`).then((e) => {
                set(()=>({
                    done:true
                }))
                // window.location.href = "/account"
            })
        },
        users:[],
        getUsers: () => {
            axios.get(`${url}/users`).then((e)=>{
                set(()=>({
                    users:e.data
                }))
            })
        },
        reload:false,
        followOrUnFollow: ({value,hisUid,myUid}) => {
            // console.log({value,email,username,myUsername,myEmail})
            console.log(value)
            console.log(`${url}/add-followers?value=${value}&hisUid=${hisUid}&myUid=${myUid}`)
            axios.get(`${url}/add-followers?value=${value}&hisUid=${hisUid}&myUid=${myUid}`).then((e)=>{
                set(()=>({
                    reload:e.data.done
                }))
            })
        }
    })
)
const useCashfree = create(

    (set) => ({
        result: {},
        // diamond:0,
        // coin:0,
        isPaid: false,
        createOrder: ({amount,phone,details,email,username}) => {
            // amount,username,phone,email,details
            axios.get(`${url}/create-order?amount=${amount}&username=${username}&phone=${phone}&email=${email}&details=${details}`).then((e) => {
                // console.log(e.data)
                set(() => ({
                    result: e.data,
                }))
            })
        },
        getOrder: (values) => {
            axios.get(`${url}/get-order?orderID=${values.link_id}`).then((e) => {
                // console.log(e)
                if (e.data.link_amount === e.data.link_amount_paid) {
                    axios.get(`${url}/add-diamonds?email=${values.email}&amount=${values.amount}`).then((e) => {
                        location.reload();
                    })
                }
            })
        }
    })
)
const usePost = create(
    (set) => ({
        result: [],
        posted: false,
        createPost: ({ username, type, uid, message, avatar,image }) => {
            axios.get(`${url}/create-post?username=${username}&uid=${uid}&type=${type}&message=${message}&avatar=${avatar}&image=${image}`).then((e) => {
                // console.log(e.data)
                set(() => ({
                    posted: e.data.done,
                }))
            })
        },
        getPosts: () => {
            axios.get(`${url}/get-posts`).then((e) => {
                // console.log(e.data)
                set(() => ({
                    result: e.data,
                }))
            })
        },
        like:({value,username})=>{
            axios.get(`${url}/like?value=${value}&username=${username}`)
        }
    })
)
const useImageUpload = create(set => ({
    image: null,
    imageFor:"",
    uploadImage: ({ image,imageFor }) => {
        const formData = new FormData();
        formData.append('img', image);
        fetch(`${url}/upload`, {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                set(() => ({
                    image: data.result,
                    imageFor:!imageFor?"":imageFor
                }))
                // console.log(data)
                // TODO: Handle the response from the server
            });
    }
}));
const useTournament = create(set => ({
    done: false,
    createTournament: ({ game, title, bannerImgUrl, mode, slot, EntryFees, description, PrizePool, tags,schedule }) => {
        // console.log({ game, title, bannerImgUrl, mode, slot, EntryFees, description, PrizePool, tags })
        axios.get(`${url}/register-tournament?game=${game}&title=${title}&bannerImgUrl=${bannerImgUrl}&mode=${mode}&slot=${slot}&EntryFees=${EntryFees}&description=${description}&PrizePool=${PrizePool}&tags=${tags}&schedule=${schedule}`).then(() => {
            // console.log("done")
            set(() => ({
                done: true
            }))
        })
    },
    result:[],
    getTournament: ()=>{
        axios.get(`${url}/all-tournament`).then((e)=>{
            // console.log(e.data)
            set(()=>({
               result:e.data
            }))
        })
    },
    isDone:false,
    joinTournament: ({_id,idTournament,amount,email}) => {
        axios.get(`${url}/join-tournament?_id=${_id}&idTournament=${idTournament}`).then((e)=>{
            if(e.data.done){
                axios.get(`${url}/coins?email=${email}&amount=${amount}`).then(()=>{
                    set(()=>({
                        isDone:true
                    }))
                })
            }
        })
    }
}));

const useClub = create(set => ({
    isCreated:false,
    result:[],
    createClub: ({ clubName, clubOwner, clubLogo, clubBanner, description,userID }) => {
        axios.get(`${url}/create-club?clubName=${clubName}&clubOwner=${clubOwner}&clubLogo=${clubLogo}&clubBanner=${clubBanner}&description=${description}`).then((e)=>{
            // console.log(e);
            set(()=>({
                isCreated:e.data.result
            }))
        })
    },
    getClubs: () => {
        axios.get(`${url}/all-clubs`).then((e)=>{
            set(()=>({
                result:e.data
            }))
        })
    },
    clubResult:[],
    getClubByID: ({_id}) => {
        // console.log(_id)
        axios.get(`${url}/club?_id=${_id}`).then((e)=>{
            // console.log(e)
            set(()=>({
                clubResult:e.data
            }))
        })
    },
    chats:[],
    getChats: ({_id,index}) => {
        // console.log(_id)
        axios.get(`${url}/get-chats?_id=${_id}&index=${index}`).then((e)=>{
            // console.log(e)
            set(()=>({
                chats:e.data
            }))
        })
    },
    channelCreated:"",
    createChannel:({_id,name})=>{
        axios.get(`${url}/create-channel?_id=${_id}&name=${name}`).then(()=>{
            set(()=>({
                channelCreated:name
            }))
        })
    },
    clubSocket:{},
    clubIO: () => {
        const socket = io.connect(url)
        // console.log(socket)
        set(()=>({
            clubSocket:socket
        }))
    },
    channels:[],
    getChannels:({_id})=>{
        axios.get(`${url}/get-channels?_id=${_id}`).then((e)=>{
            set(()=>({
                channels:e.data
            }))
        })
    },
    addMember: ({userID,_id}) => {
        // console.log(username,avatar,_id)
        axios.get(`${url}/add-member?_id=${_id}&userID=${userID}`)
    }
}));

export { useSendOTP, useUserData, useCashfree, usePost, useImageUpload, useTournament,useClub }
