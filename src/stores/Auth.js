import { defineStore } from "pinia";
import Axios from "axios";
export const useAuthStore = defineStore("auth", {
  state() {
    return {
      loginFormData: {
        email: "",
        password: "",
      },
      signupFormData: {
        name: "",
        email: "",
        password: "",
        confirm_password: "",
      },
    };
  },
  actions: {
    submitLoginForm() {
      // try {
      //     const response = await Axios.post("address", {
      //       this.loginFormData,
      //     });
      //     if(response.data.status === true){
      //       alert("Logged in");
      //     }
      //   } catch (error) {
      //     console.error(error);
      //   }
      console.log(this.loginFormData);
    },
    submitSignupForm() {
      // try {
      //   const response = await Axios.post("address", {
      //     this.signupFormData,
      //   });
      // } catch (error) {
      //   console.error(error);
      // }
      console.log(this.signupFormData);
    },
  },
});
