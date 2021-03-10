import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import Rooms from '../pages/Rooms.vue'
import About from '../pages/About.vue'
import Services from '../pages/Services.vue'

export const routes =[
    {path:'/', name:'Home', component:Home},
    {path:'/login', name:'Login', component:Login},
    {path:'/rooms', name:'Rooms', component:Rooms},
    {path:'/about', name:'about', component:About},
    {path:'/services', name:'services', component:Services},
    

    
]