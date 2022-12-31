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
        sendDetailstoServer: (values) => {
            if(values.loaded = true){
                axios.get(`${url}/get-user?uid=${values.uid}`).then((e)=>{
                    // console.log(e.data)
                    set(()=>({
                        result:e.data
                    }))
                })
            }
        },
    })
)
export { useSendOTP,useUserData }