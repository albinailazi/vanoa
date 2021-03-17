<template>
  <div class="login-body">
    <div class="login-content">
      <div class="logo_footer white seperator">
        <span>V</span>
      </div>
      <form
        class="login_box"
        id="login_form"
        @submit.prevent="onSubmit(email, password)"
      >
        <div class="emailContainer">
          <label for="email">Email</label>
          <input type="email" v-model="email" name="email" id="email" />
        </div>
        <div class="passwordContainer">
          <label for="password">Password</label>
          <input
            type="password"
            v-model="password"
            name="password"
            id="password"
          />
        </div>
        <div class="login_button">
          <button type="submit" name="submit">Login</button>
        </div>
      </form>
      <div class="login_notregistered">
        <p>
          Not registered?
          <router-link to="/register">
            <u>Create an account</u>
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import API from "../api/api";
import store from "../store";
import * as type from "../types";

export default {
  name: "login",
  data() {
    return {
      email: null,
      password: null,
    };
  },
  methods: {
    onSubmit(email, password) {
      API.post("user/login", {
        email: email,
        password: password,
      })
        .then((response) => {
          const userData = {
            token: response.data.token,
            user: response.data.user,
          };
          store.dispatch({
            type: type.AddUser,
            user: response.data.user,
          });
          API.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
          window.localStorage.setItem("VANOA_USER", JSON.stringify(userData));

          this.$router.push({ name: "Home" });
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
  },
};
</script>
