import { requestBackend } from "../utils/requests";
import * as authService from './auth-service';

export function findMe(){

    const headers = {
        Authorization: "Bearer " + authService.getAcessToken()
    }
    console.log(headers);

    return requestBackend({ url: `/users/me`, headers });
}