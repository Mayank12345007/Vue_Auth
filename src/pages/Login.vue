<script setup>
import { ref } from "vue";
import Axios from "axios";

const formData = ref({
  email: "",
  password: "",
});
const handleSubmit = () => {
  // try {
  //   const response = await Axios.post("address", {
  //     formData,
  //   });
  //   if(response.data.status === true){
  //     alert("Logged in");
  //   }
  // } catch (error) {
  //   console.error(error);
  // }

  console.log(formData.value);
};
</script>
<template>
  <div class="container">
    <div class="form">
      <div class="form_head">
        <h1>Login</h1>
        <p>
          Here you can login your account.
          <router-link to="/signup">Dont have an account?</router-link>
        </p>
      </div>
      <div class="test">
        <form>
          <div class="form_container">
            <label>Email</label>
            <input
              v-model.trim="formData.email"
              type="email"
              placeholder="email"
            />
          </div>
          <div class="form_container">
            <label>Password</label>
            <input
              v-model.trim="formData.password"
              type="password"
              placeholder="password"
            />
          </div>
          <div class="login_btn">
            <button class="form_btn" @click="handleSubmit()">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  /* background-image: url("../assets/signinBG.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center; */
  background: rgb(2, 0, 36);
  background: linear-gradient(
    31deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(149, 51, 201, 1) 50%,
    rgba(0, 212, 255, 1) 100%
  );
  padding: 1rem;
  max-width: 1280px;
  margin: 0 auto;
  border-radius: 1rem;
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.form {
  background-color: rgba(0, 0, 0, 0.2);
  border: 1px solid white;
  backdrop-filter: blur(4px);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  border-radius: 1rem;
}
.form_head h1 {
  margin-bottom: 0.8rem;
  letter-spacing: 0.2rem;
  border-bottom: 1px solid white;
  line-height: 4rem;
  color: #a382f9;
  text-align: center;
}
.form_head p {
  color: white;
}
.form_head p a {
  color: rgb(255, 240, 70);
}
.form_container {
  margin-bottom: 1rem;
}
.form_container input {
  width: 100%;
  margin: 0.5rem 0;
  line-height: 2.5rem;
  border-radius: 5px;
  padding: 10px 20px;
  outline:none;
  font-weight: 400;
  font-size: 16px;
  border: 1px solid #a382f9;
  border-radius: 2rem;
  background: transparent;
  color: white;
}
.form_container label {
  color: white;
}
.form_btn {
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
.form_btn:hover {
  background-color: white;
  color: black;
}
.login_btn {
  text-align: center;
}
</style>
