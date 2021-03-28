<template>
  <Layout>
    <div class="Home">
      <section class="block_section banner_section" style="background: #333;">
        <div id="profile-table">
          <table style="margin-left:30px;">
            <thead>
              <tr>
                <th id="editpadding">Username</th>
                <th id="editpadding">Email</th>
                <th id="editpadding">Created At</th>
                <th id="editpadding">Updated At</th>
              </tr>
            </thead>
            <tbody>
              <td id="editpadding" v-if="user">{{ user.username }}</td>
              <td id="editpadding" v-if="user">{{ user.email }}</td>
              <td id="editpadding" v-if="user">{{ user.createdAt }}</td>
              <td id="editpadding" v-if="user">{{ user.updatedAt }}</td>
                <div id="df">
                <button id="editbutton" @click="editUser(user)">Edit</button>
                <button
                  type="button"
                  id="deletebutton"
                  @click="deleteUser(user)"
                  v-on:click="onLogout"
                >Delete
                </button>
              </div>
            </tbody>
          </table>
        </div>
        <div class="banner_heading">
          <h1>{{ Vanoa }}</h1>
        </div>
      </section>
    </div>
  </Layout>
</template>

<script>
import { mapState } from "vuex";
import Layout from "../../components/Layout";
import API, {prepareAuthorization} from "../../api/api";
import store from "../../store";
import * as type from "../../types";

export default {
  name: "User",
  components: {
    Layout,
  },
  computed: {
    ...mapState({
      user: (state) => state.user,
    }),
  },
  methods: {
    deleteUser(user) {
      prepareAuthorization();
      API.delete("user/delete", { data: user })
        .then((response) => {
          console.log(response);
          this.$router.push({ name: "Home" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    editUser(user) {
      this.$router.push({
        name: "editProfile",
        params: {
          user: user,
        },
      });
    },
          onLogout() {
      window.localStorage.removeItem("VANOA_USER");
      store.dispatch({
        type: type.AddUser,
        user: null,
      });
      API.defaults.headers.common.Authorization = null;

      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style>
#editbutton {
  background-color: #b17e64;
  color: white;
  padding: 4px 13px;
  border: none;
  cursor: pointer;
  transition: background-color 100ms;
  margin-bottom: 0px;
  margin-left: 20px;
}

#editpadding {
  padding: 10px;
}

#profile-table {
  margin-top: 320px;
  margin-left: 250px;
  margin-right: 250px;
  font-size: 14px;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  background: white;
  border-radius: 0.5rem;
  box-sizing: border-box;
}
#df {
  float: right;
}
</style>
