<template>
    <header id="header" class="main_header">
            <div class="container">
                <div class="headerWrap">
                    <div class="logo_header">
                        <a href="index.php">
                            <span>V</span>anoa
                        </a>
                    </div>
                    <div class="hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <nav class="nav_wrapper">
                   
                        <ul>
                            <li>
                                <a class="<?php active('index.php');?>" href="index.php">Home</a>
                            </li>
                            <li>
                                <a class="<?php active('rooms.php');?>" href="rooms.php">Rooms</a>
                            </li>
                            <li>
                                <a class="<?php active('services.php');?>" href="services.php">Services</a>
                            </li>
                            <li>
                                <a class="<?php active('about.php');?>" href="about.php">About</a>
                            </li>
                            <li>
                                <a class="<?php active('contact.php');?>" href="contact.php">Contact</a>
                            </li>
                           

                           <li>
                                <a href="logout.php">Logout</a>
                            </li>
                            <li>
                                <a class="<?php active('loginForm.php');?>" href="loginForm.php">
                                    <!-- <?php echo $isAdminLogin ? 'Dashboard' : 'Login' ?> -->
                                    Dashboard/Login
                                </a>
                            </li>
                            
                        </ul>
                    
                    </nav>
                </div>
            </div>
        </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    //msg: String
  }
}
</script>