import {post} from '../api/api';
import { server } from '../config'


const register = async(params) => {
    var result = await post(server + '/user/register', params=params)
    console.log(result)
    return result;
}

export {register};