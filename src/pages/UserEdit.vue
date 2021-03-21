<template>  

<form>
            <div class="">
                <label name="user.email">Email</label>
                <input type="text" class="form-control" v-model="user.email" required>
            </div>
            
            <div class="">
                <label name="user.username">Username</label>
                <input type="text" class="form-control" v-model="user.username" required>
            </div>

            <router-link to="/UserDashboard"><button>Back</button></router-link>
             <button type="button" @click="updateUser(user)">Save</button> 
        </form>
</template>

 <script>
 /* eslint-disable */

    import API, { prepareAuthorization }  from "../api/api";
    export default{
        name:'UserEdit',
        data() {
            return{
                user: {},
            }
        },
        methods: {
            updateUser(user) {
      prepareAuthorization();
      API.post('user/update',user)
        .then(response => {
           this.$router.push({name: "userDashboard"
           });
        })
         .catch((error) => {
                 console.log(error); 
             });
        },
        },
        mounted() {
            this.user = this.$route.params.user;
        }
     }
 </script>

 
 


