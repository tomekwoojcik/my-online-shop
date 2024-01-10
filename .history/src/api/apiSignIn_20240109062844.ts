import axios from "axios";

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

// export const signIn = async (
//   url: string,
//   loginData: loginDataModel
// ): Promise<responseSignInModel | undefined> => {
//   const singUpUrl : string = url + "auth/signin";
//   try {
//     const response = await axios.post<responseSignInModel>(singUpUrl, loginData);
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// };
