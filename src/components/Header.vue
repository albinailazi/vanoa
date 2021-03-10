<template>
    <header id="header" class="main_header">
            <div class="container">
                <div class="headerWrap">
                    <div class="logo_header">
                        <router-link class="nav-link" to="/Home">
                        <a>
                            <span>V</span>anoa
                        </a>
                        </router-link>
                    </div>
                    <div class="hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <nav class="nav_wrapper">
                   
                        <ul>
                            <li>
                                <router-link class="nav-link" to="/">
                                <a>Home</a>
                                 </router-link>
                            </li>
                            <li>
                                <router-link class="nav-link" to="/">
                                <a>Rooms</a>
                                 </router-link>
                            </li>
                            <li>
                               <router-link class="nav-link" to="/">
                                <a>Services</a>
                                 </router-link>
                            </li>
                            <li>
                               <router-link class="nav-link" to="/about">
                                <a>About</a>
                                 </router-link>
                            </li>
                            <li>
                                <router-link class="nav-link" to="/">
                                <a>Contact</a>
                                 </router-link>
                            </li>
                           

                           <li>
                               <a href="logout.php">Login</a>
                           </li>
                            <!-- <li>
                                <a class="<?php active('loginForm.php');?>" href="loginForm.php"> -->
                                    <!-- <?php echo $isAdminLogin ? 'Dashboard' : 'Login' ?> -->
                                    <!-- Dashboard/Login
                                </a>
                            </li> -->

                            <!-- <li>
                                <a href="logout.php">Logout</a>
                            </li> -->
                            
                        </ul>

                        
                    </nav>
                </div>
            </div>
        </header>
</template>

<script>
export default {

  }

</script>