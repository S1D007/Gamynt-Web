import axios from "axios"
import create from "zustand"
const url = `http://localhost:8080`
const useSendOTP = create(
    (set) => ({
        verified: false,
        uid:"",
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
        result:{},
        diamond:0,
        coin:0,
        sendDetailstoServer: (values) => {
            if(values.loaded = true){
                axios.get(`${url}/get-user?uid=${values.uid}`).then((e)=>{
                    // console.log(e.data)
                    set(()=>({
                        result:e.data,
                        diamond:e.data.diamonds,
                        coin:e.data.coins
                    }))
                })
            }
        },
    })
)
const useCashfree = create(
    
    (set) => ({
        result:{},
        // diamond:0,
        // coin:0,
        isPaid:false,
        createOrder: (values) => {
            // amount,username,phone,email,details
                axios.get(`${url}/create-order?amount=${values.amount}&username=${values.username}&phone=${values.phone}&email=${values.email}&details=${values.details}`).then((e)=>{
                    console.log(e.data)
                    set(()=>({
                        result:e.data,
                    }))
                })
        },
        getOrder: (values) => {
            axios.get(`${url}/get-order?orderID=${values.link_id}`).then((e)=>{
                console.log(e)
                if(e.data.link_amount === e.data.link_amount_paid){
                    axios.get(`http://localhost:8080/add-diamonds?email=${values.email}&amount=${values.amount}`).then((e)=>{
                        location.reload();
                    })
                }
            })
        }
    })
)
export { useSendOTP,useUserData,useCashfree }