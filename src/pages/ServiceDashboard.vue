<template>
<Layout>
    <div class="Home">
    <section class="block_section banner_section" style="background-color:white;">
      <div style="margin-top:200px; font-size: 14px;  
	font-family: 'Roboto', sans-serif;
	font-weight: 300; color:#333; opacity:100;">

      <router-link to="/AddService" style="float:left; padding-left:40px; font-size:20px; ">
         Add Service
          </router-link>

    <table>
        <th style="padding-left:732px;">
            <router-link to="/UserDashboard" style="font-size: 30px; padding-top:20px;">
            Users |
          </router-link>
        </th>
       <hr/>
         <th> 
            <router-link to="/RoomDashboard" style="font-size: 30px; padding-top:20px;">
            Rooms |
          </router-link>
        </th>
          <hr/>
         <th> 
            <router-link to="/ServiceDashboard" style="font-size: 30px; padding-top:20px;">
            Services |
          </router-link>
        </th>
          <hr/>
         <th> 
            <router-link to="/ContactDashboard" style="font-size: 30px; padding-top:20px;">
            Contacts |
          </router-link>
        </th>
   
        
          </table>
    <div class="container" style="background:#222;  margin-right:10px; margin-left:36px; box-sizing: border-box;  border-radius: 0.5rem;">
      
<table>
    
            <thead>
            <tr style="color:white;">
                
        <th style="padding:10px; font-color:white;">Title</th>
        <th style="padding:10px;">Description</th>
        <th style="padding:10px;">Image</th>
        <th style="padding:10px;">Created At</th>
        <th style="padding:10px;">Updated At</th>
            </tr>
            </thead>

            <tbody style="color:white;">
                <tr v-for="service in Service" :key="service._id">
                  
                    <td style="padding:10px;">{{ service.title }}</td>
                    <td style="padding:10px;">{{ service.description }}</td>
                    <td style="padding:10px;">{{ service.image }}</td>
                    <td style="padding:10px;">{{ service.createdAt }}</td>
                    <td style="padding:10px;">{{ service.updatedAt }}</td>
                    <button @click="editService(service);">Edit</button>
                    <button type="button" style=" margin-left:10px;" @click="deleteService(service)">Delete</button>
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

 import API, { prepareAuthorization }  from "../api/api";
import Layout from '../components/Layout.vue';

     export default{
  components: { Layout },
         name:'ServiceDashboard',
         data() {
             return{
                VANOA: 'Vanoa',
                 Service: [],
             }
         },
methods: {
    deleteService(service) {
      prepareAuthorization();
      API.delete('service/delete',{data: service})
        .then(response => {
          this.getAllServices();
        })
         .catch((error) => {
                 console.log(error); 
             });
    },

    getAllServices() {
      prepareAuthorization();
      API.get('service/get-all')
             .then((response) =>{
                 this.Service = response.data.services;
             })
             .catch((error) => {
                 console.log(error); 
             });
    },

    editService(service) {
      this.$router.push({name: "serviceEdit", params: {
        service: service
      }});
    }
},
         mounted() {
             this.getAllServices();
         }
     }
 </script>


 
 

