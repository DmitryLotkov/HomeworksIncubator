import axios, {AxiosResponse} from "axios";


type requestAPIType = {
        data:{
            errorText: string,
            info: string
        },yourBody:{
            success: boolean
        }


}

export const instance = axios.create({
    baseURL: "https://neko-cafe-back.herokuapp.com/",

})
export const RequestAPI = {
    postInform (status: boolean){
        return instance.post<{success: boolean}, AxiosResponse<requestAPIType>>("auth/test", {success:status})
    }
}