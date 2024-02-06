<script setup>
import { useAuthStore } from "@/stores/Auth";
const authStore = useAuthStore();
</script>

<template>
  <div class="container">
    <div class="signupbox">
      <div class="imgBox"><img src="../assets/signupBG.jpg" /></div>
      <div class="signup_content">
        <div class="signup_header">
          <h1>Sign-up</h1>
          <p>
            Create your account.
            <router-link to="/login">Already have an account?</router-link>
          </p>
        </div>
        <div class="signup_form">
          <form class="form">
            <div class="formbox">
              <label>Name</label>
              <input
                v-model.trim="authStore.signupFormData.name"
                type="text"
                placeholder="name"
              />
            </div>
            <div class="formbox">
              <label>Email</label>
              <input
                v-model.trim="authStore.signupFormData.email"
                type="email"
                placeholder="email"
              />
            </div>
            <div class="formbox">
              <label>Passowrd</label>
              <input
                v-model.trim="authStore.signupFormData.password"
                type="password"
                placeholder="password"
              />
            </div>
            <div class="formbox">
              <label>Confirm Password</label>
              <input
                v-model.trim="authStore.signupFormData.confirm_password"
                type="password"
                placeholder="confirm password"
              />
            </div>
            <div class="signup_btn">
              <button @click="authStore.submitSignupForm()">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1280px;
  margin: 0 auto;
}
.signupbox {
  position: relative;
  width: 100%;
  height: 85vh;
  display: flex;
  box-shadow: 1px 5px 20px 2px;
  border-radius: 1rem;
  padding: 1rem;
}
.imgBox {
  position: relative;
  width: 50%;
  height: 100%;
}
.imgBox img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1rem;
}
.signup_content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
  height: 100%;
}
.signup_header {
  width: 80%;
}
.signup_header h1 {
  text-align: center;
  color: #a382f9;
  letter-spacing: 1px;
  margin-bottom: 1rem;
  border-bottom: 1px solid #a382f9;
  line-height: 4rem;
}
.signup_header p {
  margin-bottom: 2rem;
  color: grey;
  text-align: center;
}
.signup_form {
  width: 85%;
}
.formbox {
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
}
.formbox label {
  margin-bottom: 0.5rem;
  font-weight: bold;
}
.formbox input {
  padding: 10px 20px;
  outline: none;
  font-weight: 400;
  font-size: 16px;
  border: 1px solid #a382f9;
  border-radius: 2rem;
  background: transparent;
}

.signup_btn {
  text-align: center;
  margin-top: 2rem;
}
.signup_btn button {
  text-align: center;
  padding: 0.6rem 2rem;
  font-size: 1rem;
  font-weight: bold;
  background-color: #a382f9;
  border: 1px solid black;
  border-radius: 1.5rem;
  color: white;
  letter-spacing: 1px;
  cursor: pointer;
  transition: ease-in-out 0.2s;
}
.signup_btn button:hover {
  background-color: white;
  color: black;
}

@media (max-width: 768px) {
  .signupbox {
    padding: 0;
    height: 90vh;
  }
  .imgBox {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: rgba(0, 0, 0, 0.2);
  }
  .signup_content {
    width: 100%;
  }
}
</style>
