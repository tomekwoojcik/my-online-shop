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

export const signIn = async (
  loginData: loginDataModel,
  url: string
): Promise<responseSignInModel | undefined> => {
  const singUpUrl: string = url + "auth/signin";
  try {
    const response = await axios.post<responseSignInModel>(
      singUpUrl,
      loginData
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// export const signIn = (requestObj: loginDataModel, url: string)=> {
//   const signUpUrl: string = url + "auth/signin";
//   console.log(signUpUrl);
//   axios
//     .post < responseSignInModel > (signUpUrl, requestObj)
//     .then((response) => console.log(response))
//     .catch((error) => console.log(error));
// };
