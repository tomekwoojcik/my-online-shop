import axios from "axios";
import { useEffect } from "react";

const apiBase: string = "https://lopi2-backend-5517f8f04d28.herokuapp.com/api/";

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

interface requestSignInModel {
  firstName: string;
  lastName: string;
  username: string;
  phoneNumber: string;
  role: Role;
}

export const signIn = async (
  requestObj: requestSignInModel,
  url: string
): Promise<responseSignInModel | undefined> => {
  const signInUrl: string = url + "auth/signup";
  try {
    const response = await axios.post<responseSignInModel>(
      signInUrl,
      requestObj
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const obj: requestSignInModel = {
    firstName: "Franek",
    lastName: "Bolek",
    
}

// eslint-disable-next-line react-hooks/rules-of-hooks
// useEffect(() => { signIn()},[])