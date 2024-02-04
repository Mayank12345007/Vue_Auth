<script>
export default {
  name: "Navbar",
};
</script>

<template>
  <div class="nav">
    <div class="nav-list">
      <router-link to="/">Logo</router-link>
    </div>
    <div class="nav-list">
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/login">Login</router-link>
        </li>
        <li>
          <router-link to="/signup">Sign-up</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.nav {
  display: flex;
  background-color: #a382f9;
  justify-content: space-between;
  max-width: 1280px;
  height: 4rem;
  margin: 0.5rem auto;
  align-items: center;
  border-radius: 20px;
}
.nav-list {
  margin: 0 1rem;
}
.nav-list ul {
  display: flex;
}
.nav-list ul li {
  margin: 0.5rem;
}
.nav-list ul li a {
  padding: 0.4rem 1rem;
  border-radius: 30px;
  color: white;
  transition: ease-in-out 0.2s;
}
.nav-list ul li a:hover {
  background-color: white;
  color: black;
}
</style>
