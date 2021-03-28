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
          <label name="service.title">Title</label>
          <input
            type="text"
            class="form-control"
            v-model="service.title"
            required
          />
        </div>

        <div class="usernameContainer">
          <label name="service.description">Description</label>
          <input
            type="text"
            class="form-control"
            v-model="service.description"
            required
          />
        </div>

        <div class="usernameContainer">
          <label name="service.image">Image</label>
          <input
            type="text"
            class="form-control"
            v-model="service.image"
            required
          />
        </div>

        <router-link to="/ServiceDashboard"
          ><button id="button-id">Back</button></router-link
        >
        <button type="button" id="button-id" @click="updateService(service)">
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
  name: "ServiceEdit",
  data() {
    return {
      service: {},
    };
  },
  methods: {
    updateService(service) {
      prepareAuthorization();
      API.post("service/update", service)
        .then((response) => {
          this.$router.push({ name: "serviceDashboard" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.service = this.$route.params.service;
  },
};
</script>
