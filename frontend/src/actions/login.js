import {post} from '../api/api';
import { server } from '../config'


const login = async(params) => {
    var result = await post(server + '/login', params=params)
    console.log(result)
    return result;
}

export {login};