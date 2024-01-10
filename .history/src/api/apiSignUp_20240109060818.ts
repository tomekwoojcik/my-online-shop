import axios from "axios";
import { apiBase } from "./apiSignIn";

interface loginDataModel {
  username: string;
  password: string;
}

interface responseSignUpModel {
    token: string;
    username: string;
    role: string;
    firstName: string;
    lastName: string;
}

export const signUp = async (url: string, loginData: loginDataModel):Promise<responseSignUpModel|undefined> => {
    const singUpUrl = string = url + "auth/signin";
    try {
        const response = axios.post(singUpUrl, loginData)
        return response.data
  } catch (error) {
    console.log(error);
  }
};
