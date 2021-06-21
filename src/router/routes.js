import Home from "../pages/Home.vue";
import Login from "../pages/Login.vue";
import Rooms from "../pages/Rooms.vue";
import About from "../pages/About.vue";
import Services from "../pages/Services.vue";
import Contact from "../pages/Contact.vue";
import Register from "../pages/Register.vue";
import SingleRoom from "../pages/SingleRoom.vue";
import BookNow from "../pages/BookNow.vue";
import User from "../pages/admin/User.vue";
import Admin from "../pages/admin/Admin.vue";
import UserDashboard from "../pages/admin/UserDashboard.vue";
import RoomDashboard from "../pages/admin/RoomDashboard.vue";
import ServiceDashboard from "../pages/admin/ServiceDashboard.vue";
import AddUser from "../pages/admin/AddUser.vue";
import UserEdit from "../pages/admin/UserEdit.vue";
import AddRoom from "../pages/admin/AddRoom.vue";
import RoomEdit from "../pages/admin/RoomEdit.vue";
import ServiceEdit from "../pages/admin/ServiceEdit.vue";
import AddService from "../pages/admin/AddService.vue";
import EditProfile from "../pages/admin/EditProfile.vue";
import ContactDashboard from "../pages/admin/ContactDashboard.vue";
import RoleDashboard from "../pages/admin/RoleDashboard.vue";
import AddRole from "../pages/admin/AddRole.vue";
import RoleEdit from "../pages/admin/RoleEdit.vue";


export const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/login", name: "Login", component: Login },
  { path: "/rooms", name: "Rooms", component: Rooms },
  { path: "/about", name: "about", component: About },
  { path: "/services", name: "services", component: Services },
  { path: "/contact", name: "contact", component: Contact },
  { path: "/register", name: "register", component: Register },
  { path: "/singleroom/:slug", name: "singleroom", component: SingleRoom },
  { path: "/booknow/:slug", name: "booknow", component: BookNow },
  { path: "/user", name: "user", component: User },
  { path: "/admin", name: "admin", component: Admin },
  { path: "/userDashboard", name: "userDashboard", component: UserDashboard },
  { path: "/roomDashboard", name: "roomDashboard", component: RoomDashboard },
  { path: "/serviceDashboard", name: "serviceDashboard", component: ServiceDashboard },
  { path: "/addUser", name: "addUser", component: AddUser },
  { path: "/userEdit", name: "userEdit", component: UserEdit },
  { path: "/addRoom", name: "addRoom", component: AddRoom },
  { path: "/roomEdit", name: "roomEdit", component: RoomEdit },
  { path: "/serviceEdit", name: "serviceEdit", component: ServiceEdit },
  { path: "/addService", name: "addService", component: AddService },
  { path: "/editProfile", name: "editProfile", component: EditProfile },
  { path: "/contactDashboard", name: "contactDashboard", component: ContactDashboard },
  { path: "/roleDashboard", name: "roleDashboard", component: RoleDashboard },
  { path: "/addRole", name: "addRole", component: AddRole },
  { path: "/roleEdit", name: "roleEdit", component: RoleEdit },
];
