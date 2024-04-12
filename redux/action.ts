
import axios from "axios"
import { getFail, getStart, getSuccess } from "./reducer"

export const getDataApi = ()=>async(dispatch: (arg0: {
    payload: string | undefined
    type: "dummy/getStart" | "dummy/getSuccess" | "dummy/getFail"
}) => void)=>{
    try {
        dispatch(getStart())
        const {data}  = await axios.get('https://jsonplaceholder.typicode.com/comments?postId=1')
        dispatch(getSuccess(data))
    } catch (error) {
        dispatch(getFail())
    }
}