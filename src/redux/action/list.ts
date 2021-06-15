import axios from "axios"
import {setList} from "../reducers/listReducer"

export const searchRepository = (searchValue: string) => {
    return async (dispatch: any) => {
        try {
            const res = await axios.get(`https://api.github.com/search/repositories?q=${searchValue}`).then(res => res.data.items)
            dispatch(setList(res))
        }
        catch (e) {
            console.log(e)
        }
    }
}