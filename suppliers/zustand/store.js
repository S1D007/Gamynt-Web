import axios from "axios"
import create from "zustand"
const url = `https://gamynt-backend.onrender.com`
const useSendOTP = create(
    (set) => ({
        verified: false,
        uid: "",
        verifyEmail: (values) => {
            // console.log(values)
            axios.get(`${url}/otp-verify?email=${values.email}&otp=${values.otp}`).then((e) => {
                set(() => ({
                    verified: e.data.verified,
                    uid: e.data?.userData?.uid
                }))
            })
        },
        sendEmail: (values) => {
            if (values.btnClicked) {
                axios.get(`${url}/otp?email=${values.email}`).then((e) => {
                    console.log(e)
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
            console.log(avatar)
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
        followOrUnFollow: ({value,email,username,myUsername,myEmail}) => {
            console.log({value,email,username,myUsername,myEmail})
            axios.get(`${url}/add-followers?email=${email}&value=${value}&myEmail=${myEmail}&myUsername=${myUsername}&username=${username}`).then((e)=>{
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
                console.log(e.data)
                set(() => ({
                    result: e.data,
                }))
            })
        },
        getOrder: (values) => {
            axios.get(`${url}/get-order?orderID=${values.link_id}`).then((e) => {
                console.log(e)
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
                console.log(e.data)
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
        }
    })
)
const useImageUpload = create(set => ({
    image: null,
    uploadImage: ({ image }) => {
        const formData = new FormData();
        formData.append('img', image);
        fetch(`${url}/upload`, {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                set(() => ({
                    image: data.result
                }))
                console.log(data)
                // TODO: Handle the response from the server
            });
    }
}));
const useTournament = create(set => ({
    done: false,
    createTournament: ({ game, title, bannerImgUrl, mode, slot, EntryFees, description, PrizePool, tags,schedule }) => {
        console.log({ game, title, bannerImgUrl, mode, slot, EntryFees, description, PrizePool, tags })
        axios.get(`${url}/register-tournament?game=${game}&title=${title}&bannerImgUrl=${bannerImgUrl}&mode=${mode}&slot=${slot}&EntryFees=${EntryFees}&descriptions=${description}&PrizePool=${PrizePool}&tags=${tags}&schedule=${schedule}`).then(() => {
            console.log("done")
            set(() => ({
                done: true
            }))
        })
    },
    result:[],
    getTournament: ()=>{
        axios.get(`${url}/all-tournament`).then((e)=>{
            console.log(e.data)
            set(()=>({
                result:e.data
            }))
        })
    }
}));
export { useSendOTP, useUserData, useCashfree, usePost, useImageUpload, useTournament }
