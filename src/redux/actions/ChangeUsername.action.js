export const CHANGE_USERNAME = 'CHANGE_USERNAME';


export function changeUsername(name){
    return { type: CHANGE_USERNAME, payload: name}
}

