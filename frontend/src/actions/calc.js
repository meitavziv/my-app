import { json } from 'react-router-dom';
import {post} from '../api/api';
import { server } from '../config'


const calcCalories = async(params) => {
    var result = await post(server + '/nutrition/calc', params=params)
    return result;
}

export {calcCalories};