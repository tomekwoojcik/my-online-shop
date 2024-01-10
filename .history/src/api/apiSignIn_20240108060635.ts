const apiBase : string = "https://lopi2-backend-5517f8f04d28.herokuapp.com/api/";



interface signInModel {
    firstName: string;
    lastName: string;
    username: string;
    phoneNumber: string;
  uuid: string,
  role: "ROLE_USER",
  "enabled": true

}

export const signIn = () => {
    
}