<template>
<Layout>
    <div class="Home">
    <section class="block_section banner_section" style="background-image: url('content/images/slider.jpg');">
    
    <div class="container">
        <div style = "background:white; margin-top:250px; margin-right:100px; margin-left:100px; box-sizing: border-box; background:white; border-radius: 0.5rem;">
    <h1 style="font-size: 25px;
	font-family: 'Roboto', sans-serif;
	font-weight: 300;">User Table</h1>
<table>
    
            <thead>
            <tr>
                
        <th style="padding:10px;">Username</th>
        <th style="padding:10px;">E-mail</th>
        <th style="padding:10px;">Created At</th>
        <th style="padding:10px;">Updated At</th>
            </tr>
            </thead>

            <tbody >
                <tr v-for="user in User" :key="user._id">
                  
                    <td style="padding:10px;">{{ user.username }}</td>
                    <td style="padding:10px;">{{ user.email }}</td>
                    <td style="padding:10px;">{{ user.createdAt }}</td>
                    <td style="padding:10px;">{{ user.updatedAt }}</td>
                </tr>
            </tbody>
        </table>
        
        </div>
    </div>
   
  <div class="banner_heading">
          <h1>{{ Vanoa }}</h1>
        </div>
      
    </section>
    </div>
</Layout>
</template>

 <script>
 /* eslint-disable */

 import API from "../api/api";
import Layout from '../components/Layout.vue';
     export default{
  components: { Layout },
         name:'Admin',
          components:{
    Layout
  },
         data() {
             return{
                 User: [],
             }
         },
         mounted() {
             API.get('user/get-all')
             .then((response) =>{
                 console.log(response.data.users);
                 this.User = response.data.users;
             })
             .catch((error) => {
                 console.log(error); 
             });
         }
     }
 </script>

 
 

