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
          <label name="email">Email</label>
          <input type="text" class="form-control" v-model="email" required />
        </div>

        <div class="usernameContainer">
          <label name="username">Username</label>
          <input type="text" class="form-control" v-model="username" required />
        </div>

        <div class="roleContainer">
          <label style="margin-top: 5px" name="role">Role</label>
          <select v-model="role" required>
            <option v-for="role in Roles" :key="role._id" v-bind="role">{{
              role.name
            }}</option>
          </select>
        </div>

        <router-link to="/UserDashboard"
          ><button id="button-id">Back</button></router-link
        >
        <button
          type="button"
          id="button-id"
          @click="updateUser({ email, username, role })"
        >
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
  name: "UserEdit",
  data() {
    return {
      user: {},
      email: "",
      username: "",
      role: "",
      Roles: [],
    };
  },
  methods: {
    updateUser(user) {
      prepareAuthorization();

      API.post("user/update", {
        ...this.user,
        email: user.email,
        username: user.username,
        role: user.role,
      })
        .then((response) => {
          this.$router.push({ name: "userDashboard" });
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getRoles() {
      API.get("role/get-all")
        .then((response) => {
          this.Roles = response.data.roles;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    console.log("this.$route.params.user", this.$route.params.user);
    this.user = this.$route.params.user;
    this.email = this.$route.params.user.email;
    this.username = this.$route.params.user.username;
    this.role = this.$route.params.user.role;
    this.getRoles();
  },
};
</script>

<style>
#button-id {
  background-color: #b17e64;
  color: white;
  padding: 5px 15px;
  border: none;
  cursor: pointer;
  transition: background-color 100ms;
  margin-top: 20px;
  margin-right: 3px;
  margin-left: 3px;
}

#vanoa-dashboard {
  color: inherit;
  padding-left: 100px;
}

#logo-header {
  color: inherit;
  /* padding-left: 100px; */
  margin-right: 400px;
  margin-bottom: -40px;
  margin-top: 10px;
}

#span-id {
  margin-left: -70px;
}
.selectionBox {
  padding: 5px 5px 5px 5px;
  margin-top: -25px;
}
</style>
