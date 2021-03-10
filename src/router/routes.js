import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import Rooms from '../pages/Rooms.vue'
import About from '../pages/About.vue'
import Services from '../pages/Services.vue'
import Contact from '../pages/Contact.vue'
import Register from '../pages/Register.vue'
import SingleRoom from '../pages/SingleRoom.vue'


export const routes =[
    {path:'/', name:'Home', component:Home},
    {path:'/login', name:'Login', component:Login},
    {path:'/rooms', name:'Rooms', component:Rooms},
    {path:'/about', name:'about', component:About},
    {path:'/services', name:'services', component:Services},
    {path:'/contact', name:'contact', component:Contact},
    {path:'/register', name:'register', component:Register},
    {path:'/singleroom', name:'singleroom', component:SingleRoom},
    

    
]