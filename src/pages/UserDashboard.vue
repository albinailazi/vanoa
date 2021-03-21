<template>
<Layout>
    <div class="Home">
    <section class="block_section banner_section" style="background-color:white;">
      <div style="margin-top:200px; font-size: 14px; font-family: 'Roboto', sans-serif; font-weight: 300; color:#333; opacity:100;">
     <router-link to="/AddUser" style="float:left; padding-left:40px; font-size:20px; ">
         Add User
          </router-link>
    <table>
        <th style="padding-left:732px;">
            <router-link to="/UserDashboard" style="font-size: 30px; padding-top:20px;">
            Users |
          </router-link>
        </th>
       <hr/>
         <th> 
            <router-link class="nav-link" to="/RoomsDashboard" style="font-size: 30px; padding-top:20px;">
            Rooms |
          </router-link>
        </th>
          <hr/>
         <th> 
            <router-link class="nav-link" to="/ServicesDashboard" style="font-size: 30px; padding-top:20px;">
            Services |
          </router-link>
        </th>
          <hr/>
         <th> 
            <router-link to="/UserDashboard" style="font-size: 30px; padding-top:20px;">
            Contacts |
          </router-link>
        </th>
          </table>
    <div class="container" style="background:#222;  margin-right:10px; margin-left:36px; box-sizing: border-box;  border-radius: 0.5rem;">
      
        <table>
    
            <thead>
            <tr style="color:white;">
                
        <th style="padding:10px; font-color:white;">Username</th>
        <th style="padding:10px;">E-mail</th>
        <th style="padding:10px;">Created At</th>
        <th style="padding:10px;">Updated At</th>
            </tr>
            </thead>

            <tbody style="color:white;">
                <tr v-for="user in User" :key="user._id">
                  
                    <td style="padding:10px;">{{ user.username }}</td>
                    <td style="padding:10px;">{{ user.email }}</td>
                    <td style="padding:10px;">{{ user.createdAt }}</td>
                    <td style="padding:10px;">{{ user.updatedAt }}</td>
                    <div style="float:right;">
                    <button @click="editUser(user);">Edit</button>
                    <button type="button" style=" margin-left:10px;" @click="deleteUser(user)">Delete</button>
                    
                    </div>
                </tr>
            </tbody>
       
        </table>
        
        </div>
    </div>

  <div class="banner_heading">
          <h1>{{ VANOA }}</h1>
        </div>
      
    </section>
    </div>
</Layout>
</template>

 <script>
 /* eslint-disable */

 import API, { prepareAuthorization }  from "../api/api";
import Layout from '../components/Layout.vue';

     export default{
  components: { Layout },
         name:'UserDashboard',
         data() {
             return{
                VANOA: 'Vanoa',
                 User: [],
             }
         },
methods: {
    deleteUser(user) {
      prepareAuthorization();
      API.delete('user/delete',{data: user})
        .then(response => {
          //this.$router.push({ name: "userDashboard" });
          this.getAllUsers();
        })
         .catch((error) => {
                 console.log(error); 
             });
    },

    getAllUsers() {
      prepareAuthorization();
      API.get('user/get-all')
             .then((response) =>{
                 this.User = response.data.users;
             })
             .catch((error) => {
                 console.log(error); 
             });
    },

    editUser(user) {
      this.$router.push({name: "userEdit", params: {
        user: user
      }});
    }
},
         mounted() {
             this.getAllUsers();
         }
     }
 </script>

 
 

