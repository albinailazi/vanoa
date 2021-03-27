<template>
  <div class="Home">
    <section class="block_section banner_section" id="tr-colortr-color">         
      <div id="editdiv">
        <div class="logo_header">
          <router-link id="vanoa-dashboard" class="nav-link" to="/UserDashboard">
            <span >V</span>anoa - Dashboard
          </router-link>
        </div>
        
        <table>
          <div id="editth">
            <th>
            <router-link to="/RoleDashboard" id="editsecondrouterlink">Roles |</router-link>
            </th>

            <th>
            <router-link to="/UserDashboard" id="editsecondrouterlink">Users |</router-link>
            </th>
       
            <th> 
            <router-link class="nav-link" to="/RoomDashboard" id="editsecondrouterlink">Rooms |</router-link>
            </th>
          
            <th> 
            <router-link class="nav-link" to="/ServiceDashboard" id="editsecondrouterlink">Services |</router-link>
            </th>
         
            <th> 
            <router-link to="/ContactDashboard" id="editsecondrouterlink">Contacts</router-link>
            </th>
            
            <div id="separator-padding">
              <div class="seperator white" id="editseperator">
                <span>V</span>
              </div>
            </div>  
          </div>
        </table>
        
        <div id="adduser">
          <router-link to="/AddRoom">Add Room</router-link>
        </div>
        
        <div id="editseconddiv">
          <table>
            <thead>
              <tr id="tr-color">
                <th id="th-padding">Title</th>
                <th>Description</th>
                <th>Price</th>
                <th>Image</th>
                <th>Created At</th>
                <th>Updated At</th>
              </tr>
            </thead>

            <tbody id="tr-color">
              <tr v-for="room in Room" :key="room._id">
                <td id="th-padding">{{ room.title }}</td>
                <td id="th-padding">{{ room.description }}</td>
                <td id="th-padding">{{ room.price }}</td>
                <td id="th-padding">{{ room.image }}</td>
                <td id="th-padding">{{ room.createdAt }}</td>
                <td id="th-padding">{{ room.updatedAt }}</td>

                <div id="df">
                  <td><button id="editbutton" @click="editRoom(room);">Edit</button></td>
                  <td><button type="button" id="deletebutton" @click="deleteRoom(room)">Delete</button></td>
                </div>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </div>
</template>

 <script>
/* eslint-disable */
import API, { prepareAuthorization }  from "../api/api";

export default{
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

  <style>
 #vanoa-dashboard{
   color:inherit;
   padding-left:100px
 }
 #editdiv{
   margin-top: 10px;
   margin-left:5px;
   margin-right:100px;
   font-size: 14px;
   font-family:'Roboto', sans-serif;
   font-weight: 300;
   color:#333;
 }

 #editrouterlink{
   float: left;
   padding-left: 30px;
   margin-bottom: -30px;
   font-size: 25px;
   font-family:'Roboto', sans-serif;
   font-weight: 300;
   color:#333;
   
   
 }

 #editth{
   padding-left:730px;
   margin-top: -40px;
 }

 #editsecondrouterlink{
   font-size: 30px;
   padding-top:20px;
 }

 #editseconddiv{
   background: #222;
   margin-right: -75px;
   margin-left: 20px;
   box-sizing: border-box;
   border-radius: 0.5rem;
 }

 #editseperator{
    position: relative;
    margin-top: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 2px solid #b17e64;
    padding-bottom: 10px;
    margin-left: -700px;
    margin-right: -60px;
    padding-right: 100px;
 }

 #adduser{
  margin-right: 1096px;
  margin-bottom: 10px;
   font-size: 25px;
   font-family:'Roboto', sans-serif;
   font-weight: 300;
   color:#333;
 }

 #editbutton{
  background-color: #b17e64;
	color:white;
	padding:5px 20px;
	border:none;
	cursor: pointer;
	transition: background-color 100ms;
  margin-right:5px;
 }

 #deletebutton{
  background-color: #b17e64;
	color:white;
	padding:5px 14px;
	border:none;
	cursor: pointer;
	transition: background-color 100ms;
 }

 #buttonmargin{
   margin-bottom:100px;
 }

 #separator-padding{
   padding-bottom:100px;
 }

 #tr-color{
   color:white;
 }

 #th-padding{
   padding:10px;
 }

 #df{
   float:right;
 }
 </style>
 

