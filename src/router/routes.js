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
import RoomDashboard from '../pages/RoomDashboard.vue'
import ServiceDashboard from '../pages/ServiceDashboard.vue'
import AddUser from '../pages/AddUser.vue'
import UserEdit from '../pages/UserEdit.vue'
import AddRoom from '../pages/AddRoom.vue'
import RoomEdit from '../pages/RoomEdit.vue'
import ServiceEdit from '../pages/ServiceEdit.vue'

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
    {path:'/roomDashboard', name:'roomDashboard', component:RoomDashboard},
    {path:'/serviceDashboard', name:'serviceDashboard', component:ServiceDashboard},
    {path:'/addUser', name:'addUser', component:AddUser},
    {path:'/userEdit', name:'userEdit', component:UserEdit},
    {path:'/addRoom', name:'addRoom', component:AddRoom},
    {path:'/roomEdit', name:'roomEdit', component:RoomEdit},
    {path:'/serviceEdit', name:'serviceEdit', component:ServiceEdit},


    

    
]