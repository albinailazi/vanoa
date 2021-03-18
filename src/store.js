import Vue from "vue";
import Vuex from "vuex";
import API from "./api/api";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    user: null,
  },
  mutations: {
    AddUser(state, payload) {
      return (state.user = payload.user);
    },
  },
  actions: {
    AddUser(context, payload) {
      context.commit("AddUser", payload);
    },
  },
});

const localData = JSON.parse(window.localStorage.getItem("VANOA_USER"));

if (localData) {
  API.defaults.headers.common.Authorization = `Bearer ${localData.token}`;
  API.get("user/me")
    .then((response) => {
      const userData = {
        token: localData.token,
        user: response.data.user,
      };
      store.dispatch({
        type: "AddUser",
        user: response.data.user,
      });
      API.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
      window.localStorage.setItem("VANOA_USER", JSON.stringify(userData));
    })
    .catch((err) => {
      console.error(err);
      store.dispatch({
        type: "AddUser",
        user: null,
      });
      API.defaults.headers.common.Authorization = null;
      window.localStorage.removeItem("VANOA_USER");
    });
}

export default store;
