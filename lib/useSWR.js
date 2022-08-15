import useSWR from "swr";
import {baseUrl} from "./http";

function useWSWR(path, init, skipFirst = false){
            return useSWR(`${baseUrl}${path}`, init, skipFirst)
}
function createHeaders(){
    return new Headers({
        'Content-Type': 'application/json; charset=utf-8'
    })
}
export function useSwrGet(path){
    const headers = createHeaders()
    return useWSWR(path, {
        method: 'GET',
        mode: 'cors',
        headers
    })
}

export function useSwrPost(path, body={}){
    const headers = createHeaders()
    return useWSWR(path, {
        method: 'POST',
        body,
        mode: 'cors',
        headers
    })
}
