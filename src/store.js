import Vue from 'vue';
import Vuex from 'vuex';
import API from './api/api';    
Vue.use(Vuex);


const store = new Vuex.Store({
    state: {
        user: null,
    },
    mutations: {
        AddUser (state, payload){
            return state.user = payload.user;
        }
    },
    actions: {
        AddUser (context, payload) {
            context.commit('AddUser', payload);
        }
    }
});

const localData = JSON.parse(window.localStorage.getItem('VANOA_USER'));

if(localData){
    API.defaults.headers.common.Authorization = `Bearer ${localData.token}`;
    store.dispatch({
        type: "AddUser",
        user: localData.user,
    })
}

export default store;