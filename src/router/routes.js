import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import Rooms from '../pages/Rooms.vue'
import About from '../pages/About.vue'

import NotFound from '../pages/NotFound.vue'

export const routes =[
    {path:'/', name:'Home', component:Home},
    {path:'/login', name:'Login', component:Login},
    {path:'/rooms', name:'Rooms', component:Rooms},
    {path:'/about', name:'about', component:About},

    {path: "/:catchAll(.*)", name: "NotFound", component:NotFound}
]