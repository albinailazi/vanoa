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
          <label name="room.title">Title</label>
          <input
            type="text"
            class="form-control"
            v-model="room.title"
            required
          />
        </div>

        <div class="usernameContainer">
          <label name="room.description">Description</label>
          <input
            type="text"
            class="form-control"
            v-model="room.description"
            required
          />
        </div>

        <div class="usernameContainer">
          <label name="room.price">Price</label>
          <input
            type="text"
            class="form-control"
            v-model="room.price"
            required
          />
        </div>

        <div class="usernameContainer">
          <label name="room.image">Image</label>
          <input
            type="text"
            class="form-control"
            v-model="room.image"
            required
          />
        </div>

        <router-link to="/RoomDashboard"
          ><button id="button-id">Back</button></router-link
        >
        <button type="button" id="button-id" @click="updateRoom(room)">
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
  name: "RoomEdit",
  data() {
    return {
      room: {},
    };
  },
  methods: {
    updateRoom(room) {
      prepareAuthorization();
      API.post("room/update", room)
        .then((response) => {
          this.$router.push({ name: "roomDashboard" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.room = this.$route.params.room;
  },
};
</script>
