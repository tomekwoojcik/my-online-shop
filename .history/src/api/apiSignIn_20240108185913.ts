import axios from "axios";

const apiBase : string = "https://lopi2-backend-5517f8f04d28.herokuapp.com/api/";

enum Role {
    ROLE_USER = "ROLE_USER",
    ROLE_ADMIN = "ROLE_ADMIN",
}

interface responseSignInModel {
    firstName: string;
    lastName: string;
    username: string;
    phoneNumber: string;
    uuid: string;
    role: Role;
    enabled: boolean;
}

interface requestSignInModel{
     firstName: string;
    lastName: string;
    username: string;
    phoneNumber: string;
    role: Role;
}

export const signIn = (requestObj: requestSignInModel, url: string): responseSignInModel => {
    const signInUrl:string = url+"auth/signup"
    axios.get(signInUrl)
    
}