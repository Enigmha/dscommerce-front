import { TOKE_KEY } from "../utils/system";

export function save(token: string) {
    localStorage.setItem(TOKE_KEY, token);
} 

export function get() : string | null {
   return localStorage.getItem(TOKE_KEY);
}

export function remove(){
    localStorage.removeItem(TOKE_KEY);
}



