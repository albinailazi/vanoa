import Home from '../components/Home.vue'
import About from '../components/About.vue'



export const routes =[
    {path:'/', name:'home', component:Home},
    {path:'/about', name:'about', component:About},
        //{path:'/header',component:() => /* webpackChunkName:'header' */ Header}
    
]