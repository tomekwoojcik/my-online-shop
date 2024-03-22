import axios from "axios";
import { axiosConfig } from "../state/state";

export enum Role {
  ROLE_USER = "ROLE_USER",
  ROLE_ADMIN = "ROLE_ADMIN",
}

interface responseSignUpModel {
  firstName: string;
  lastName: string;
  username: string;
  phoneNumber: string;
  uuid: string;
  role: Role;
  enabled: boolean;
}

export interface requestSignUpModel {
  firstName: string;
  lastName: string;
  username: string;
  phoneNumber: string;
  password: string;
  role: Role;
}

export const signUp = async (
  requestObj: requestSignUpModel,
  url: string
): Promise<responseSignUpModel | undefined> => {
  const signUpUrl: string = url + "auth/signup";
  try {
    const response = await axios.post<responseSignUpModel>(signUpUrl, null, {
      params: requestObj,
      ...axiosConfig,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
