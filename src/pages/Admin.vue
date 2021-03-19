<template>
    <div class="container">
        <h1>Hi</h1>
                <table>
            <thead>
            <tr>
                
        <th>Username</th>
        <th style="padding:50px">E-mail</th>
         <th style="padding:50px">Password</th>
            </tr>
            </thead>

            <tbody >
                <tr v-for="user in User" :key="user._id">
                  
                    <td style="padding:50px">{{ user.email }}</td>
                    <td style="padding:50px">{{ user.email }}</td>
                   
                    
                    <td style="padding:50px">{{ user.password }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

 <script>
 /* eslint-disable */
 import axios from 'axios';
 import API from "../api/api";
     export default{
         name:'User',
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

 
 

