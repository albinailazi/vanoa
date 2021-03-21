import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import Rooms from '../pages/Rooms.vue'
import About from '../pages/About.vue'
import Services from '../pages/Services.vue'
import Contact from '../pages/Contact.vue'
import Register from '../pages/Register.vue'
import SingleRoom from '../pages/SingleRoom.vue'
import User from '../pages/User.vue'
import Admin from '../pages/Admin.vue'
import UserDashboard from '../pages/UserDashboard.vue'
import RoomsDashboard from '../pages/RoomsDashboard.vue'
import ServicesDashboard from '../pages/ServicesDashboard.vue'
import AddUser from '../pages/AddUser.vue'
import UserEdit from '../pages/UserEdit.vue'

export const routes =[
    {path:'/', name:'Home', component:Home},
    {path:'/login', name:'Login', component:Login},
    {path:'/rooms', name:'Rooms', component:Rooms},
    {path:'/about', name:'about', component:About},
    {path:'/services', name:'services', component:Services},
    {path:'/contact', name:'contact', component:Contact},
    {path:'/register', name:'register', component:Register},
    {path:'/singleroom', name:'singleroom', component:SingleRoom},
    {path:'/user', name:'user', component:User},
    {path:'/admin', name:'admin', component:Admin},
    {path:'/userDashboard', name:'userDashboard', component:UserDashboard},
    {path:'/roomsDashboard', name:'roomsDashboard', component:RoomsDashboard},
    {path:'/servicesDashboard', name:'servicesDashboard', component:ServicesDashboard},
    {path:'/addUser', name:'addUser', component:AddUser},
    {path:'/userEdit', name:'userEdit', component:UserEdit},

    

    
]