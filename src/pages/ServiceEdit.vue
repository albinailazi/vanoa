<template>  

<form>
            <div class="">
                <label name="service.title">Title</label>
                <input type="text" class="form-control" v-model="service.title" required>
            </div>
            
            <div class="">
                <label name="service.description">Description</label>
                <input type="text" class="form-control" v-model="service.description" required>
            </div>

            <div class="">
                <label name="service.image">Image</label>
                <input type="text" class="form-control" v-model="service.image" required>
            </div>


            <router-link to="/ServiceDashboard"><button>Back</button></router-link>
             <button type="button" @click="updateService(service)">Save</button> 
        </form>
</template>

<script>
 /* eslint-disable */

    import API, { prepareAuthorization }  from "../api/api";
    export default{
        name:'ServiceEdit',
        data() {
            return{
                service: {},
            }
        },
        methods: {
        updateService(service) {
      prepareAuthorization();
      API.post('service/update',service)
        .then(response => {
           this.$router.push({name: "serviceDashboard"
           });
        })
         .catch((error) => {
                 console.log(error); 
             });
        },
        },
        mounted() {
            this.service = this.$route.params.service;
        }
     }
 </script>
