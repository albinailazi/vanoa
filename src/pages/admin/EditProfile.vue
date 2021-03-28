<template>
  <div class="login-body">
    <div class="login-content">
      <div class="logo_header" id="logo-header">
        <router-link id="vanoa-dashboard" class="nav-link" to="/UserDashboard">
          <span>V</span>anoa - Dashboard
        </router-link>
      </div>
      <div class="logo_footer white seperator">
        <router-link id="vanoa-dashboard" class="nav-link" to="/UserDashboard">
          <span id="span-id">V</span>
        </router-link>
      </div>

      <form class="login_box" id="register_form">
        <div class="emailContainer">
          <label name="user.email">Email</label>
          <input
            type="text"
            class="form-control"
            v-model="user.email"
            required
          />
        </div>

        <div class="usernameContainer">
          <label name="user.username">Username</label>
          <input
            type="text"
            class="form-control"
            v-model="user.username"
            required
          />
        </div>

        <router-link to="/UserDashboard"
          ><button id="button-id">Back</button></router-link
        >
        <button type="button" id="button-id" @click="updateUser(user)">
          Save
        </button>
      </form>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

import API, { prepareAuthorization } from "../../api/api";
export default {
  name: "EditProfile",
  data() {
    return {
      user: {},
    };
  },
  methods: {
    updateUser(user) {
      prepareAuthorization();
      API.post("user/update", user)
        .then((response) => {
          this.$router.push({ name: "user" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.user = this.$route.params.user;
  },
};
</script>
