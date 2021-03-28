<template>
  <div class="login-body">
    <div class="login-content">
      <div class="logo_footer white seperator">
        <span>V</span>
      </div>
      <form
        class="login_box"
        id="register_form"
        @submit.prevent="
          onSubmit(email, username, password, passwordConfirm, role)
        "
      >
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
        <div class="roleContainer">
          <label style="margin-top: 5px" name="user.role">Role</label>
          <select v-model="role" required id="role">
            <option v-for="role in Roles" :key="role._id" v-bind="role">{{
              role.name
            }}</option>
          </select>
        </div>

        <div class="register_button">
          <button type="submit" name="submitted">
            Add User
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import API from "../../api/api";

export default {
  name: "AddUser",
  data() {
    return {
      email: null,
      username: null,
      password: null,
      passwordConfirm: null,
      role: null,
      user: {},
      Roles: [],
    };
  },
  methods: {
    onSubmit(email, username, password, passwordConfirm, role) {
      if (password !== passwordConfirm) return;

      API.post("user/create", {
        email: email,
        username: username,
        password: password,
        role: role,
      })
        .then(() => {
          this.$router.push({ name: "userDashboard" });
        })
        .catch((error) => {
          console.log("error", error);
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
    this.getRoles();
  },
};
</script>
<style scoped>
.selectionBox {
  padding: 5px 5px 5px 5px;
  margin-top: -25px;
}
</style>
