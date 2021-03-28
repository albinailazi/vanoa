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
          <label name="role.name">Name</label>
          <input
            type="text"
            class="form-control"
            v-model="role.name"
            required
          />
        </div>

        <router-link to="/RoleDashboard"
          ><button id="button-id">Back</button></router-link
        >
        <button type="button" id="button-id" @click="updateRole(role)">
          Save
        </button>
      </form>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

import API, { prepareAuthorization } from "../api/api";
export default {
  name: "RoleEdit",
 data() {
    return {
      role: {},
    };
  },
  methods: {
    updateRole(role) {
      prepareAuthorization();
      API.post("role/update", role)
        .then((response) => {
          this.$router.push({ name: "roleDashboard" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.role = this.$route.params.role;
  },
};
</script>