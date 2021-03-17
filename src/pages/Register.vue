<template>
  <div class="login-body">
    <div class="login-content">
      <div class="logo_footer white seperator">
        <span>V</span>
      </div>
      <form
        class="login_box"
        id="register_form"
        @submit.prevent="onSubmit(email, username, password, passwordConfirm)"
      >
        <!-- <?php echo $res && $res != '' ? '<p style="color:red">'. $res .'</p>' : ''; ?> -->
        <div class="emailContainer">
          <label for="email"> Email </label>
          <input type="email" v-model="email" name="email" id="email" />
        </div>
        <div class="usernameContainer">
          <label for="username">Username</label>
          <input type="text" v-model="username" name="username" id="username" />
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
        <div class="confirmPasswordContainer">
          <label for="confirmPassword">Confirm Password</label>
          <input
            type="password"
            v-model="passwordConfirm"
            id="confirmPassword"
          />
        </div>

        <div class="register_button">
          <button type="submit" name="submitted">Sign up</button>
        </div>
        <div class="login_notregistered">
          <p>
            If registered.
            <router-link to="/login">
              <b>Login here</b>
            </router-link>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import API from "../api/api";
import store from "../store";
import * as type from "../types";

export default {
  name: "register",
  data() {
    return {
      email: null,
      username: null,
      password: null,
      passwordConfirm: null,
    };
  },
  methods: {
    onSubmit(email, username, password, passwordConfirm) {
      if (password !== passwordConfirm) return;

      API.post("user/register", {
        email: email,
        username: username,
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
