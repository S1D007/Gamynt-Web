import axios from "axios"
import create from "zustand"
const url = `http://localhost:8080`
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
        sendDetailstoServer: (values) => {
            if (values.loaded = true) {
                axios.get(`${url}/get-user?uid=${values.uid}`).then((e) => {
                    // console.log(e.data)
                    set(() => ({
                        result: e.data,
                        diamond: e.data.diamonds,
                        coin: e.data.coins
                    }))
                })
            }
        },
        editProfile: ({ username, bio, email }) => {
            // console.log(username,bio,email)
            axios.get(`${url}/edit-profile?username=${username}&bio=${bio}&email=${email}`).then((e) => {
                // window.location.href = "/account"
            })
        },
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
        createPost: ({ username, type, uid, message, avatar }) => {
            axios.get(`${url}/create-post?username=${username}&uid=${uid}&type=${type}&message=${message}&avatar=${avatar}`).then((e) => {
                console.log(e.data)
                set(() => ({
                    posted: true,
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
    setImage: image => set({ image }),
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
                // console.log(data)
                // TODO: Handle the response from the server
            });
    }
}));
const useTournament = create(set => ({
    done: false,
    createTournament: ({ game, title, banner, mode, slot, EntryFees, description, PrizePool, tags,schedule,advanceType,advanceAmount,duration }) => {
        console.log({ game, title, banner, mode, slot, EntryFees, description, PrizePool, tags })
        axios.get(`${url}/register-tournament?game=${game}&title=${title}&banner=${banner}&mode=${mode}&slot=${slot}&EntryFees=${EntryFees}&descriptions=${description}&PrizePool=${PrizePool}&tags=${tags}&schedule=${schedule}&advanceType=${advanceType}&advanceAmount=${advanceAmount}&duration=${duration}`).then(() => {
            console.log("done")
            set(() => ({
                done: true
            }))
        })
    }
}));
export { useSendOTP, useUserData, useCashfree, usePost, useImageUpload, useTournament }
