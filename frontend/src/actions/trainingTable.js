import {get, post} from '../api/api';
import { server } from '../config'

const trainingTable = async() => {
    var result = await get(server + '/training');
    console.log(result)
    return result;
}

const username = String(localStorage.getItem('user'))
// console.log(username)

const getPersonalTrainingTable = async() => {
    var result = await get(server + '/training/personal/get');
    console.log(result)
    return result;
}

const postPersonalTrainingTable = async(params) => {
    var result = await post(server + '/training/personal/post', params);
    console.log(result)
    return result;
}

export {trainingTable, getPersonalTrainingTable, postPersonalTrainingTable};