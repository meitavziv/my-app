import { message } from "antd";
import { json } from "react-router-dom";

export async function get(url, errorMessage='התרחשה שגיאה'){
    try {
        const response = await fetch(url);
        if (response.status != 200 ) {
            message.error(errorMessage);
            return undefined;
        }
        return response.json();
    }
    catch(error) {
        message.error(errorMessage)
        return undefined;
    }
}

export async function post(url, params, errorMessage='התרחשה שגיאה', isFormData=false){
    try{
        const response = await fetch(url, {method:'post', body: isFormData? params: JSON.stringify(params), });
        if (response.status != 200 ) {
            message.error(errorMessage);
            return undefined;
        }
        return response.json();
    }
    catch(error) {
        message.error(errorMessage)
        return undefined;
    }
}