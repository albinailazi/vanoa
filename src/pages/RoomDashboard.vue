<template>
<Layout>
    <div class="Home">
    <section class="block_section banner_section" style="background-color:white;">
      <div style="margin-top:200px; font-size: 14px;  
	font-family: 'Roboto', sans-serif;
	font-weight: 300; color:#333;">
   <router-link to="/AddRoom" style="float:left; padding-left:40px; font-size:20px; ">
         Add Room
          </router-link>
    <table>
        <th style="padding-left:732px;">
            <router-link to="/UserDashboard" style="font-size: 30px; padding-top:20px;">
            Users |
          </router-link>
        </th>
       <hr/>
         <th> 
            <router-link to="/RoomsDashboard" style="font-size: 30px; padding-top:20px;">
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
            <router-link to="/UserDashboard" style="font-size: 30px; padding-top:20px;">
            Contacts |
          </router-link>
        </th>
   
        
          </table>
    <div class="" style="background:#222; border-radius: 0.5rem;">
      
<table>
    
            <thead>
            <tr style="color:white;">
                
        <th style="padding:10px; font-color:white;">Title</th>
        <th style="padding:10px;">Description</th>
        <th style="padding:10px;">Price</th>
        <th style="padding:10px;">Image</th>
        <th style="padding:10px;">Created At</th>
        <th style="padding:10px;">Updated At</th>
            </tr>
            </thead>

            <tbody style="color:white;">
                <tr v-for="room in Room" :key="room._id">
                  
                    <td style="padding:10px;">{{ room.title }}</td>
                    <td style="padding:10px;">{{ room.description }}</td>
                    <td style="padding:10px;">{{ room.price }}</td>
                    <td style="padding:10px;">{{ room.image }}</td>
                    <td style="padding:10px;">{{ room.createdAt }}</td>
                    <td style="padding:10px;">{{ room.updatedAt }}</td>
                    <button @click="editRoom(room);">Edit</button>
                    <button type="button" style=" margin-left:10px;" @click="deleteRoom(room)">Delete</button>
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
         name:'RoomDashboard',
         data() {
             return{
                VANOA: 'Vanoa',
                 Room: [],
             }
         },
methods: {
    deleteRoom(room) {
      prepareAuthorization();
      API.delete('room/delete',{data: room})
        .then(response => {
          this.getAllRooms();
        })
         .catch((error) => {
                 console.log(error); 
             });
    },

    getAllRooms() {
      prepareAuthorization();
      API.get('room/get-all')
             .then((response) =>{
                 this.Room = response.data.rooms;
             })
             .catch((error) => {
                 console.log(error); 
             });
    },

    editRoom(room) {
      this.$router.push({name: "roomEdit", params: {
        room: room
      }});
    }
},
         mounted() {
             this.getAllRooms();
         }
     }
 </script>

 
 

