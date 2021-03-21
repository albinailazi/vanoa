<template>
  <div class="login-body">
    <div class="login-content">
      <div class="logo_footer white seperator">
        <span>V</span>
      </div>
      <form class="login_box">
    
        <div class="emailContainer">
          <label for="title"> Title </label>
          <input type="text" />
        </div>
        <div class="usernameContainer">
          <label for="description">Description</label>
          <input type="text" />
        </div>
        <div class="usernameContainer">
          <label for="price">Price</label>
          <input type="text"/>
        </div>
        <div class="usernameContainer">
          <label for="image">Image</label>
          <input type="text" />
        </div>
    
        <div class="register_button">
          <button type="button"  @click="createRoom(room)">Add Room</button>
        </div>
      
      </form>
    </div>
  </div>
</template>

<script>
 /* eslint-disable */

    import API, { prepareAuthorization }  from "../api/api";
    export default{
        name:'AddRoom',
        data() {
            return{
                 title: null,
                 description: null,
                 price: null,
                 image: null,
            }
        },
        methods: {
            createRoom(room) {
      prepareAuthorization();
      API.post('room/create',{
        title: title,
        description: description,
        price: price,
        image: image,
      })
        .then(response => {
             const roomData = {
            token: response.data.token,
            room: response.data.room,
            };
            store.dispatch({
            type: type.AddRoom,
            room: response.data.room,
          });
           this.$router.push({name: "roomDashboard"
           });
        })
         .catch((error) => {
                 console.log(error); 
             });
        },
        }
      
     }
 </script>