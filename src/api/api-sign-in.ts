import axios from "axios";
import { axiosConfig } from "../state/state";

interface loginDataModel {
  username: string;
  password: string;
}

interface responseSignInModel {
  token: string;
  username: string;
  role: string;
  firstName: string;
  lastName: string;
}

export const signIn = async (
  loginData: loginDataModel,
  url: string
): Promise<responseSignInModel | undefined> => {
  const singUpUrl: string = url + "auth/signin";
  try {
    const response = await axios.post<responseSignInModel>(singUpUrl, null, {
      params: loginData,
      ...axiosConfig,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
