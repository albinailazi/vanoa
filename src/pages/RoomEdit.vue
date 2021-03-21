<template>  

<form>
            <div class="">
                <label name="room.title">Title</label>
                <input type="text" class="form-control" v-model="room.title" required>
            </div>
            
            <div class="">
                <label name="room.description">Description</label>
                <input type="text" class="form-control" v-model="room.description" required>
            </div>

            <div class="">
                <label name="room.price">Price</label>
                <input type="text" class="form-control" v-model="room.price" required>
            </div>

            <div class="">
                <label name="room.image">Image</label>
                <input type="text" class="form-control" v-model="room.image" required>
            </div>


            <router-link to="/RoomDashboard"><button>Back</button></router-link>
             <button type="button" @click="updateRoom(room)">Save</button> 
        </form>
</template>

<script>
 /* eslint-disable */

    import API, { prepareAuthorization }  from "../api/api";
    export default{
        name:'RoomEdit',
        data() {
            return{
                room: {},
            }
        },
        methods: {
            updateRoom(room) {
      prepareAuthorization();
      API.post('room/update',room)
        .then(response => {
           this.$router.push({name: "roomDashboard"
           });
        })
         .catch((error) => {
                 console.log(error); 
             });
        },
        },
        mounted() {
            this.room = this.$route.params.room;
        }
     }
 </script>
