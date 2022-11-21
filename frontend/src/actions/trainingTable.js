import {get} from '../api/api';
import { server } from '../config'

const trainingTable = async() => {
    var result = await get(server + '/training');
    console.log(result);
    return result;
}

export {trainingTable};