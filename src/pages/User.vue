<template>
<Layout>
 <div class="Home">
    <section
      class="block_section banner_section"
      style="background: #333;">

        <div style = "background:white; margin-top:250px; margin-right:300px; margin-left:300px; box-sizing: border-box; background:white; border-radius: 0.5rem;">
            
            <table> 
            <thead>
                <tr >

                    <th style="padding:10px;">Username</th>
                    <th style="padding:10px;">Email</th>
                    <th style="padding:10px;">Created At</th>
                    <th style="padding:10px;">Updated At</th>
                    
                    
                </tr>
            </thead>
            <tbody>
                 <td style="padding:10px;" v-if="user">{{user.username}}</td> 
                 <td style="padding:10px;" v-if="user">{{user.email}}</td> 
                 <td style="padding:10px;" v-if="user">{{user.createdAt}}</td> 
                 <td style="padding:10px;" v-if="user">{{user.updatedAt}}</td> 
                 
            </tbody>
            
            

</table>
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
import { mapState } from "vuex";
import Layout from '../components/Layout';

     export default{
         name:'User',
          components:{
    Layout
  },
         computed: {
            ...mapState({
            user: (state) => state.user,
            }),
        },
          
     }
 </script>

<style scoped>

</style>
