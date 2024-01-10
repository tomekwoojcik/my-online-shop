import { apiBase } from "./apiSignIn";

interface loginDataModel {
  username: string;
  password: string;
}

export const signUp = async (url: string, loginData: loginDataModel)=> {
    string = url+"auth/signin"
  try {
  } catch (error) {
    console.log(error);
  }
};
